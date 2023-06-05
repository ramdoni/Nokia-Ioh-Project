@section('title', 'Kasir')
<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="body">
                <div class="row">
                    <div class="col-md-8">
                        <div class="row mb-4">
                            @if(!$transaksi)
                                <div class="col-4 form-group">
                                    <label>JENIS TRANSAKSI</label>
                                    <br />
                                    <label class="fancy-radio">
                                        <input type="radio" wire:model="jenis_transaksi" value="1" >
                                        <span><i></i>ANGGOTA</span>
                                    </label>
                                    <label class="fancy-radio">
                                        <input type="radio" wire:model="jenis_transaksi" value="2">
                                        <span><i></i>NON ANGGOTA</span>
                                    </label>
                                    @if($jenis_transaksi==1)
                                        <input type="text" class="form-control" wire:model="no_anggota"  wire:keydown.enter="start_transaction" placeholder="NO ANGGOTA" />
                                    @endif
                                    @error('jenis_transaksi') <h4 class="text-danger">{{ $message }}</h4> @enderror
                                    @if($msg_error_jenis_transaksi) <h6 class="text-danger">{{ $msg_error_jenis_transaksi }}</h6> @endif
                                </div>
                            @endif
                            @if($status_transaksi==0)
                                <div class="col-md-4">
                                    <a href="javascript:void(0)" wire:click="start_transaction" class="btn btn-info btn-lg mt-4"><i class="fa fa-star"></i> MULAI TRANSAKSI</a>
                                </div>
                            @endif
                            @if($status_transaksi==1)
                                <div class="col-md-4">
                                    <label>KODE PRODUKSI / SKU</label>
                                    <input type="text" class="form-control" wire:model="kode_produksi" wire:keydown.enter="getProduct" placeholder="Kode Produksi / SKU" />
                                    @error('kode_product') <h4 class="text-danger">{{ $message }}</h4> @enderror
                                    @if($msg_error) <h6 class="text-danger">{{ $msg_error }}</h6> @endif
                                </div>
                                <div class="col-md-1 px-0">
                                    <label>QTY</label>
                                    <input type="number" class="form-control"  wire:keydown.enter="getProduct" wire:model="qty" />
                                </div>
                            @endif
                        </div>
                        <div class="table-responsive">
                            <table class="table center-aligned-table table-bordered">
                                <thead>
                                    <tr style="background:#16a3b8;color:white;">
                                        <th class="text-center">NO</th>
                                        <th>KODE PRODUKSI / SKU</th>
                                        <th>PRODUK</th>
                                        <th class="text-right">HARGA</th>
                                        <th class="text-center">QTY</th>
                                        <th class="text-center">SISA STOK</th>
                                        <th class="text-right">TOTAL</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                @if(!$data)
                                    <tr>
                                        <td class="text-center" colspan="7">KOSONG</td>
                                    </tr>
                                @endif
                                @php($num=1)
                                @foreach($data as $k => $item)
                                    <tr>
                                        <td class="text-center">{{$num}}@php($num++)</td>
                                        <td>{{$item['kode_produksi']}}</td>
                                        <td>{{$item['keterangan']}}</td>
                                        <td class="text-right">{{format_idr($item['harga_jual'])}}</td>
                                        <td class="text-center">{{$item['qty']}}</td>
                                        <td class="text-center">{{$item['stock']}}</td>
                                        <td class="text-right">{{format_idr($item['harga_jual'] * $item['qty']);}}</td>
                                        <td class="text-center">
                                            <a href="javascript:void(0)" class="btn btn-danger" wire:click="delete({{$k}})" title="Hapus"><i class="fa fa-close"></i></a>
                                        </td>
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    </div>
                    <div class="col-md-4">
                        @if($jenis_transaksi==1)
                            <div style="background:#eeeeee4f;" class="mb-3">
                                <table class="table table_total">
                                    <tr>
                                        <th>NO ANGGOTA</th>
                                        <td class="text-right">{{isset($anggota->no_anggota_platinum) ? $anggota->no_anggota_platinum : ''}}</td>
                                    </tr>    
                                    <tr>
                                        <th>NAMA</th>
                                        <td class="text-right">{{isset($anggota->name) ? $anggota->name : ''}}</td>
                                    </tr>
                                    <tr>
                                        <th>COOPAY</th>
                                        <td class="text-right">Rp. {{isset($anggota->simpanan_ku) ? format_idr($anggota->simpanan_ku) : '0'}}</td>
                                    </tr>   
                                    <tr>
                                        <th>SALDO LIMIT</th>
                                        <td class="text-right">Rp. {{isset($anggota->plafond) ? format_idr($anggota->plafond - $anggota->plafond_digunakan) : '0'}}</td>
                                    </tr>    
                                </table>
                            </div>
                        @endif
                        <div style="background:#eeeeee4f">
                            <table class="table table_total">
                                <tr>
                                    <th>NO TRANSAKSI</th>
                                    <td class="text-right">{{isset($transaksi->no_transaksi) ? $transaksi->no_transaksi : ''}}</td>
                                </tr>    
                                <tr>
                                    <th>QTY</th>
                                    <td class="text-right">{{format_idr($total_qty)}}</td>
                                </tr>
                                <tr>
                                    <th>PPN</th>
                                    <td class="text-right">Rp. {{format_idr($ppn)}}</td>
                                </tr>
                                <tr>
                                    <th>TOTAL</th>
                                    <td class="text-right">Rp. {{format_idr($total_and_ppn)}}</td>
                                </tr>
                                <tr>
                                    <th>METODE PEMBAYARAN</th>
                                </tr>
                                <tr>
                                    <th colspan="2">
                                        @if($message_metode_pembayaran)
                                            <div class="alert alert-danger" role="alert">{{$message_metode_pembayaran}}</div> 
                                        @endif
                                        <select class="form-control" wire:model="metode_pembayaran">
                                            <option value="1">TUNAI</option>
                                            @if($anggota)
                                                <option value="5">COOPAY - {{format_idr($anggota->simpanan_ku)}}</option>
                                                <option value="3">SALDO LIMIT - {{format_idr($anggota->plafond - $anggota->plafond_digunakan)}}</option>
                                            @endif
                                        </select>
                                    </th>
                                </tr>
                                @if($metode_pembayaran==4)
                                    <tr>
                                        <th colspan="2">
                                            <div class="mt-2"> 
                                                <div class="form-group">
                                                    <span>UANG TUNAI</span>
                                                    <input type="number" class="form-control" wire:model="uang_tunai" />
                                                </div>
                                            </div>
                                        </th>
                                        <tr>
                                            <th>KEMBALI</th>
                                            <td class="text-right" style="font-size:20px;color:red;font-weight:bold;">Rp. {{format_idr($total_kembali)}}</td>
                                        </tr>
                                    </tr>
                                @endif
                            </table>
                            @if($status_transaksi==1)
                                <span wire:loading wire:target="bayar">
                                    <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                                    <span class="sr-only">{{ __('Loading...') }}</span>
                                </span>
                                <button type="button" wire:loading.remove wire:target="bayar,cancel_transaction" class="btn btn-info btn-lg col-12" wire:click="bayar" style=""><i class="fa fa-arrow-right"></i> <span>BAYAR</span></button>
                                <a href="javascript:void(0)" wire:click="cancel_transaction" wire:loading.remove wire:target="bayar,cancel_transaction" class="btn btn-danger btn-lg mt-2 col-12"><i class="fa fa-close"></i> BATALKAN TRANSAKSI</a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .table_total tr td {
            font-size:16px;
        }
        .table_total tr th,.table_total tr td {padding-top:10px;padding-bottom:10px;}
    </style>
</div>
@push('after-scripts')
    <script>
        var transaction_id;
        
        Livewire.on('on-print',(url)=>{
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", url);
            ifrm.setAttribute('id','printf_struk');
            ifrm.style.width = "640px";
            ifrm.style.height = "480px";
            ifrm.style.display = "none";
            document.body.appendChild(ifrm);
                    
            document.getElementById("printf_struk").contentWindow.print();
        });

        Livewire.on('set_transaction_id',(id)=>{
            transaction_id = id;
        });
        var channel = pusher.subscribe('kasir');
        channel.bind('bayar_qrcode', function(data) {
            if(data.transaction_id==transaction_id){
                alert('Pembayaran berhasil');
                @this.set('success',true)
                console.log(data);
            }
        });
    </script>
@endpush
