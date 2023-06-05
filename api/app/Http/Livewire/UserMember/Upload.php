<?php

namespace App\Http\Livewire\UserMember;

use Livewire\Component;
use App\Models\UserMember;
use App\Models\Transaksi;
use App\Models\TransaksiItem;
use Livewire\WithFileUploads;

class Upload extends Component
{
    use WithFileUploads;
    public $file;
    public function render()
    {
        return view('livewire.user-member.upload');
    }

    public function save()
    {
        set_time_limit(50000); // 
        $this->validate([
            'file'=>'required|mimes:xls,xlsx|max:51200' // 50MB maksimal
        ]);
        
        $path = $this->file->getRealPath();
        $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
        $reader->setReadDataOnly(true);
        $data = $reader->load($path);
        $sheetData = $data->getActiveSheet()->toArray();

        if(count($sheetData) > 0){
            $countLimit = 1;
            foreach($sheetData as $key => $i){
                if($key==1 || $i[1]=="") continue; // skip header
            
                $no_transaksi = $i[1];
                $tanggal = $i[2];
                $status = $i[3];
                $kode_anggota = $i[4];
                $nama_anggota = $i[5];
                $produk = $i[6];
                $qty = $i[7];
                $harga = $i[8];
                $total = $i[9];
                $pembayaran = $i[10];
                
                switch($pembayaran){
                    case 'CASH':
                        $metode_pembayaran = 4;
                        break;
                    case 'CREDIT':
                        $metode_pembayaran = 3;
                        break;
                    default:
                        $metode_pembayaran = 4;
                        break;
                }

                $member =\App\Model\UserMember::where('no_anggota_platinum',$kode_anggota)->first();
                
                $transaksi = Transaksi::where('no_transaksi',$no_transaksi)->first();
                if(!$transaksi){
                    $transaksi = new Transaksi();
                    $transaksi->no_transaksi = $no_transaksi;
                    $transaksi->user_member_id = $member?$member->id:0;
                    $transaksi->tanggal_transaksi = date('Y-m-d',strtotime($tanggal));
                    $transaksi->is_migrate = 1;
                    $transaksi->metode_pembayaran = $metode_pembayaran;
                    $transaksi->save();
                }

                $item = new TransaksiItem();
                $item->transaksi_id = $transaksi->id;
                $item->description = $produk;
                $item->qty = $qty;
                $item->price = $harga;
                $item->total = $total;
                $item->save();

                $transaksi->amount = TransaksiItem::where('transaksi_id',$transaksi->id)->sum('price');
                $transaksi->save();
            }
        }

        session()->flash('message-success',__('Data berhasil di upload'));

        return redirect()->route('user-member.index');
    }
}