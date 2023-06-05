@section('title', 'Ketua Yayasan')
@section('parentPageTitle', 'Home')
<div class="clearfix row">
    <div class="col-lg-12">
        <div class="card">
            <div class="body">
                <ul class="nav nav-tabs">                                
                    <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#anggota">Anggota <span class="badge badge-danger">{{\App\Models\UserMember::where(['admin_approval'=>1,'status'=>1])->whereNull('ketua_approval')->count()}}</span></a></li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#klaim">Klaim
                        <span class="badge badge-danger">{{\App\Models\Klaim::where(function($table){
                            $table->whereNull('is_approve_ketua')->orWhere('is_approve_ketua',0);
                        })->where(['status'=>1])->count()}}</span>    
                    </a></li>
                </ul>
                <div class="tab-content px-0">
                    <div class="tab-pane active" id="anggota">
                        <livewire:ketua-yayasan.member.index />
                    </div>
                    <div class="tab-pane" id="klaim">
                        <livewire:ketua-yayasan.klaim.index />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>