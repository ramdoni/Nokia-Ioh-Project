@section('title', 'Dashboard')
@section('parentPageTitle', '')

<div class="row clearfix">
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card overflowhidden number-chart">
            <div class="body">
                <div class="number">
                    <h6>Anggota</h6>
                    <span>{{format_idr(\App\Models\UserMember::where('status',2)->where('is_non_anggota',0)->count())}}</span>
                </div>
                {{-- <small class="text-muted">19% compared to last week</small> --}}
            </div>
            <div class="sparkline" data-type="line" data-spot-Radius="0" data-offset="90" data-width="100%" data-height="50px"
            data-line-Width="1" data-line-Color="#f79647" data-fill-Color="#fac091">1,4,1,3,7,1</div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card overflowhidden number-chart">
            <div class="body">
                <div class="number">
                    <h6>Total Simpanan</h6>
                    <span></span>
                </div>
                {{-- <small class="text-muted">19% compared to last week</small> --}}
            </div>
            <div class="sparkline" data-type="line" data-spot-Radius="0" data-offset="90" data-width="100%" data-height="50px"
            data-line-Width="1" data-line-Color="#604a7b" data-fill-Color="#a092b0">1,4,2,3,6,2</div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card overflowhidden number-chart">
            <div class="body">
                <div class="number">
                    <h6>Total SHU</h6>
                    <span></span>
                </div>
                {{-- <small class="text-muted">19% compared to last week</small> --}}
            </div>
            <div class="sparkline" data-type="line" data-spot-Radius="0" data-offset="90" data-width="100%" data-height="50px"
            data-line-Width="1" data-line-Color="#4aacc5" data-fill-Color="#92cddc">1,4,2,3,1,5</div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card overflowhidden number-chart">
            <div class="body">
                <div class="number">
                    <h6>Total Transaksi</h6>
                    <span></span>
                </div>
                {{-- <small class="text-muted">19% compared to last week</small> --}}
            </div>
            <div class="sparkline" data-type="line" data-spot-Radius="0" data-offset="90" data-width="100%" data-height="50px"
            data-line-Width="1" data-line-Color="#4f81bc" data-fill-Color="#95b3d7">1,3,5,1,4,2</div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card">
            <div class="body">
                
            </div>
        </div>
    </div>
</div>
