@section('title', 'Setting')
@section('parentPageTitle', 'Dashboard')

<div class="row clearfix">
    <div class="col-lg-12">
        <div class="card">
            <div class="body">
                <form wire:submit.prevent="save">
                    <div class="row">
                        <div class="col-md-3">
                            <h6>Logo</h6>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if($logoUrl)
                                    <img src="{{$logoUrl}}" class="user-photo media-object" style="height:50px;" alt="User">
                                    @endif
                                </div>
                                <div class="media-body">
                                    @error('logo')
                                    <p class="text-danger">{{$message}}</p>
                                    @enderror
                                    <p>Upload your logo.
                                        <br> <em>Image should be at least 140px x 140px</em></p>
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-photo"><i class="fa fa-upload"></i> Select File</button>
                                    <input type="file" wire:model="logo" id="filePhoto" class="sr-only">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h6>Favicon</h6>
                            <div class="media photo">
                                <div class="media-left m-r-15">
                                    @if($faviconUrl)
                                    <img src="{{$faviconUrl}}" class="user-photo media-object" style="height:50px;" alt="User">
                                    @endif
                                </div>
                                <div class="media-body">
                                    @error('favicon')
                                    <p class="text-danger">{{$message}}</p>
                                    @enderror
                                    <p>Upload your Favicon.
                                        <br> <em>Image should be at least 16px x 16px</em></p>
                                    <button type="button" class="btn btn-default-dark" id="btn-upload-favicon"><i class="fa fa-upload"></i> Select File</button>
                                    <input type="file" wire:model="favicon" id="fileFavicon" class="sr-only">
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary"><i class="fa fa-save"></i> Simpan Perubahan</button>
                </form>
            </div>
            <form  wire:submit.prevent="updateBasic">
                <div class="body">
                    <div class="row clearfix mb-4">
                        <div class="col-lg-6 col-md-12">
                            <div class="form-group">              
                                <label>Company</label>                                  
                                <input type="text" class="form-control" placeholder="Company" wire:model="company">
                            </div>
                            <div class="form-group">                                                
                                <input type="text" class="form-control" placeholder="Phone" wire:model="phone">
                            </div>
                            <div class="form-group">                                                
                                <input type="text" class="form-control" placeholder="Mobile" wire:model="mobile">
                            </div>
                            <div class="form-group">                                                
                                <input type="text" class="form-control" placeholder="Email" wire:model="email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="http://" wire:model="website">
                            </div>
                            <div class="form-group">    
                                <textarea class="form-control" wire:model="address" style="height:80px;" placeholder="Address"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <h6>Pembiayaan</h6>
                            <hr />
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label>Margin (%)</label>                                                
                                    <input type="text" class="form-control" wire:model="pinjaman_jasa" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <button type="submit" class="btn btn-primary">Simpan Perubahan</button>
                </div>
            </form>
                
        </div>
    </div>
</div>
@section('page-script')
    $(function() {
        // favicon upload
        $('#btn-upload-favicon').on('click', function() {
            $(this).siblings('#fileFavicon').trigger('click');
        });

        // photo upload
        $('#btn-upload-photo').on('click', function() {
            $(this).siblings('#filePhoto').trigger('click');
        });

        // plans
        $('.btn-choose-plan').on('click', function() {
            $('.plan').removeClass('selected-plan');
            $('.plan-title span').find('i').remove();

            $(this).parent().addClass('selected-plan');
            $(this).parent().find('.plan-title').append('<span><i class="fa fa-check-circle"></i></span>');
        });
    });

@stop
