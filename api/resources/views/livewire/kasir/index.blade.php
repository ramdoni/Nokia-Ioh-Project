@section('title', 'Kasir')
<div class="row clearfix">
    <div class="col-8">
        <div class="card">
            <div class="body">
                <div class="row mb-4">
                    <div class="col-md-4">
                        <label>KODE PRODUKSI / BARCODE (Q)</label>
                        <input type="text" class="form-control" id="barcode" wire:model="kode_produksi" wire:keydown.enter="getProduct" placeholder="BARCODE" />
                        @error('kode_produksi') <h6 class="text-danger">{{ $message }}</h6> @enderror
                        @if($msg_error) <h6 class="text-danger">{{ $msg_error }}</h6> @endif
                    </div>
                    <div class="col-md-1 px-0">
                        <label>QTY (W)</label>
                        <input type="number" class="form-control" id="qty" wire:keydown.enter="getProduct" wire:model="qty" />
                    </div>
                    <div class="col-4 pt-4">
                        <span wire:loading wire:target="getProduct">
                            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                            <span class="sr-only">{{ __('Loading...') }}</span>
                        </span>
                        <button type="button" wire:loading.remove wire:click="getProduct" id="btnGetProduct" wire:target="getProduct" class="btn btn-info btn-lg"><i class="fa fa-plus"></i> TAMBAH (E)</button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table center-aligned-table table-bordered">
                        <thead>
                            <tr style="background:#16a3b8;color:white;">
                                <th class="text-center">NO</th>
                                <th>KODE PRODUKSI / BARCODE</th>
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
        </div>
    </div>

    <div class="col-md-4">
        <div class="card">
            <div class="body">
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
                    </table>
                    <button type="button" data-toggle="modal" data-target="#modal_input_anggota" id="btn_input_anggota" class="btn btn-warning btn-lg col-12 mb-2"><i class="fa fa-user"></i> 
                        @if($anggota)
                            {{$anggota->no_anggota_platinum}} / {{$anggota->name}} (P)
                        @else
                            <span>INPUT NO ANGGOTA (P)</span>
                        @endif
                    </button>
                    @if($status_transaksi==1)
                        <div class="row">
                            <span wire:loading wire:target="bayar">
                                <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                                <span class="sr-only">{{ __('Loading...') }}</span>
                            </span>
                            <div class="col-7 pr-0">
                                <a href="javascript:voi(0)" data-toggle="modal" data-target="#modal_pembayaran" id="btn_bayar" wire:loading.remove wire:target="bayar,cancel_transaction" class="btn btn-info btn-lg col-12" style=""><i class="fa fa-check-circle"></i> <span>BAYAR (A)</span></a>
                            </div>
                            <div class="col-5 pr-0">
                                <a href="javascript:void(0)" wire:click="cancel_transaction" wire:loading.remove wire:target="bayar,cancel_transaction" class="btn btn-danger btn-lg col-12" id="btn_batalkan"><i class="fa fa-close"></i> BATAL (S)</a>
                            </div>
                        </div>
                    @endif
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
    <div wire:ignore.self class="modal fade" id="modal_pembayaran" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title text-center" style="margin:auto;" id="exampleModalLabel"><i class="fa fa-check-circle"></i> Pembayaran</h4>
                </div>
                <form wire:submit.prevent="bayar">
                    <div class="modal-body">
                        @if($this->status_transaksi==1)
                            <div class="row">
                                <div class="col-4">
                                    <div class="list-group">
                                        <a href="javascript:void(0);" wire:click="$set('metode_pembayaran',4)" class="list-group-item list-group-item-action {{ $metode_pembayaran==4 ? 'active' : ''}}">Tunai</a>
                                        <a href="javascript:void(0);" wire:click="$set('metode_pembayaran',3)" class="list-group-item list-group-item-action {{ $metode_pembayaran==3 ? 'active' : ''}}">Bayar Nanti</a>
                                        <a href="javascript:void(0);" wire:click="$set('metode_pembayaran',5)" class="list-group-item list-group-item-action {{ $metode_pembayaran==5 ? 'active' : ''}}">Coopay</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">Kartu Kredit</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">Kartu Debit</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">GoPay</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">Dana</a>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div>
                                        <table style="width:100%">
                                            <tr>
                                                <td>
                                                    <h5>Grand Total</h5>
                                                </td>
                                                <td class="text-right text-success">
                                                    <h5 style="font-size:20px;">Rp. {{format_idr($total_and_ppn)}}</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2"><hr /></td>
                                            </tr>
                                            @if($metode_pembayaran==4)
                                                <tr>
                                                    <td colspan="2">
                                                        @if($message_metode_pembayaran)
                                                            <div class="alert alert-danger" role="alert">{{$message_metode_pembayaran}}</div> 
                                                        @endif
                                                        <div class="mt-2"> 
                                                            <strong>UANG TUNAI</strong>
                                                            <input type="text" class="form-control text-right format_price" wire:model="uang_tunai" style="font-size:20px;" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>KEMBALI</th>
                                                    <td class="text-right text-success" style="font-size:20px;color:red;font-weight:bold;">Rp. {{format_idr($total_kembali)}}</td>
                                                </tr>
                                            @endif
                                            @if($metode_pembayaran==3 and $anggota)
                                                <tr>
                                                    <th>SALDO LIMIT</th>
                                                    <td class="text-right text-success" style="font-size:20px;color:red;font-weight:bold;">Rp. {{format_idr($anggota->plafond - $anggota->plafond_digunakan)}}</td>
                                                </tr>
                                            @endif
                                            @if($metode_pembayaran==5 and $anggota)
                                                <tr>
                                                    <th colspan="2" class="text-center">
                                                        <div wire:loading.remove wire:target="event_bayar">
                                                            <label>Gunakan Aplikasi Coopay dan Scan disini</label>
                                                            {!! QrCode::size(200)->generate(get_setting('no_koperasi')); !!}
                                                        </div>
                                                        <span wire:loading wire:target="event_bayar">
                                                            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                                                            <span class="sr-only">{{ __('Loading...') }}</span>
                                                        </span>
                                                    </th>
                                                </tr>
                                            @endif
                                        </table>

                                    </div>
                                </div>
                            </div>
                        @endif
                        @if($this->status_transaksi==0 and $success)
                            <h4 class="text-success text-center"><i class="fa fa-check-circle"></i> Pembayaran Berhasil dilakukan</h4>
                        @endif
                    </div>
                    <div class="modal-footer">
                        <span wire:loading wire:target="getProduct">
                            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                            <span class="sr-only">{{ __('Loading...') }}</span>
                        </span>
                        @if($this->status_transaksi==1)
                            <button wire:loading.remove wire:target="setAnggota" type="submit" class="btn btn-info col-12 btn-lg"><i class="fa fa-check-circle"></i> BAYAR</button>
                        @endif
                        @if($this->status_transaksi==0 and $success)
                            <a href="javascript:void(0)" class="btn btn-success col-6 btn-lg" data-dismiss="modal" aria-label="Close"><i class="fa fa-check-circle"></i> OKE</a>
                            <a href="javascript:void(0)" class="btn btn-info col-6 btn-lg" wire:click="cetakStruk"><i class="fa fa-print"></i> CETAK</a>
                        @endif
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div wire:ignore.self class="modal fade" id="modal_input_anggota" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form wire:submit.prevent="setAnggota">
                    <div class="modal-body">
                        <div class="form-group">
                            <label>NOMOR ANGGOTA (T)</label>
                            <input type="number" class="form-control" id="no_anggota" wire:model="no_anggota"  wire:keydown.enter="setAnggota" placeholder="NOMOR ANGGOTA" />
                            @error('no_anggota')
                                <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $message }}</li></ul>
                            @enderror
                            @if($msg_error_anggota)
                                <ul class="parsley-errors-list filled" id="parsley-id-29"><li class="parsley-required">{{ $msg_error_anggota }}</li></ul>
                            @endif
                        </div>
                        @if($temp_anggota)
                            <table class="table">
                                <tr>
                                    <th>Nama</th>
                                    <td> : {{$temp_anggota->name}}</td>
                                </tr>
                                <tr>
                                    <th>No Telepon</th>
                                    <td> : {{$temp_anggota->phone_number}}</td>
                                </tr>
                                <tr>
                                    <th>Saldo Limit</th>
                                    <td> : Rp. {{format_idr($temp_anggota->plafond - $temp_anggota->plafond_digunakan)}}</td>
                                </tr>
                                <tr>
                                    <th>COOPAY</th>
                                    <td> : Rp. {{format_idr($temp_anggota->simpanan_ku)}}</td>
                                </tr>
                            </table>
                        @endif
                    </div>
                    <div class="modal-footer">
                        <span wire:loading wire:target="getProduct">
                            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
                            <span class="sr-only">{{ __('Loading...') }}</span>
                        </span>
                        @if($temp_anggota)
                            <a href="javascript:void(0)" wire:loading.remove wire:target="setAnggota" wire:click="okeAnggota" id="btn_find_anggota_oke" class="btn btn-success col-9 btn-lg"><i class="fa fa-check-circle"></i> Oke (U)</a>
                            <a href="javascript:void(0)" wire:loading.remove wire:target="setAnggota" wire:click="deleteAnggota" id="btn_find_anggota_hapus" class="btn btn-danger col-3 btn-lg"><i class="fa fa-times"></i> Hapus (I)</a>
                        @else
                            <button wire:loading.remove wire:target="setAnggota" type="submit" id="btn_find_anggota" class="btn btn-warning col-12 btn-lg"><i class="fa fa-search-plus"></i> FIND (Y)</button>
                        @endif
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal_start_work" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <livewire:kasir.start-work />
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="modal_end_work" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <livewire:kasir.end-work />
            </div>
        </div>
    </div>
    
    @push('after-scripts')
        <script src="{{ asset('assets/js/jquery.priceformat.min.js') }}"></script>
        <script>
            document.onkeyup = function(e) {
                console.log(e.which);
                if(e.which==81){ // Q
                    $("#barcode").focus();
                }
                if(e.which==87){ // W
                    $("#qty").focus();
                }
                if(e.which==69){ // E
                    $("#btnGetProduct").trigger('click');
                }
                if(e.which==80){ // P
                    $("#btn_input_anggota").trigger('click');
                }
                if(e.which==84){ // T
                    $("#no_anggota").focus();
                }
                if(e.which==89){ // T
                    $("#btn_find_anggota").trigger('click');
                }
                if(e.which==85){ // U
                    Livewire.emit('okeAnggota');
                }
                if(e.which==73){ // I
                    Livewire.emit('deleteAnggota');
                }
                if(e.which==65){ // A
                    $('#btn_bayar').trigger('click');
                }
            };

            $('.format_price').priceFormat({
                prefix: '',
                centsSeparator: '.',
                thousandsSeparator: '.',
                centsLimit: 0
            });
            
            var transaction_id;

            Livewire.on('close-modal-start-work',()=>{
                $("#modal_start_work").modal("hide");
            });
            
            Livewire.on('close-modal-input-anggota',()=>{
                $("#modal_input_anggota").modal("hide");
                console.log("#modal_input_anggota");
            });

            @if(!$user_kasir)
                $("#modal_start_work").modal("show");
            @endif

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
                console.log('Transaction id :'+id);
                transaction_id = id;
            });
            var channel = pusher.subscribe('kasir');
            channel.bind('bayar_qrcode', function(data) {
                Livewire.emit('event_bayar',data.transaction_id);
            });
        </script>
    @endpush

</div>