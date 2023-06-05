<div id="left-sidebar" class="sidebar">
    <div class="sidebar-scroll">
        <div class="user-account">
            @if(\Auth::user()->profile_photo_path!="")
            <img src="{{ \Auth::user()->profile_photo_path }}" class="rounded-circle user-photo" alt="User Profile Picture">
            @endif
            <div class="dropdown">
                <span>Welcome,</span>
                <a href="javascript:void(0);" class="dropdown-toggle user-name" data-toggle="dropdown"><strong>{{ isset(\Auth::user()->name)?\Auth::user()->name :''}}</strong></a>
                <ul class="dropdown-menu dropdown-menu-right account">
                    <li><a href="{{route('profile')}}"><i class="icon-user"></i>My Profile</a></li>
                    <li><a href="{{route('setting')}}"><i class="icon-settings"></i>Settings</a></li>
                    <li class="divider"></li>
                    <li><a href="#" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();"><i class="icon-power"></i>Logout</a></li>
                </ul>
            </div>
            {{-- <hr> --}}
            {{-- <ul class="row list-unstyled">
                <li class="col-4">
                    <small>Member</small>
                    <h6>{{format_idr(\App\Models\UserMember::count())}}</h6>
                </li>
                <li class="col-4">
                    <small>Koordinator</small>
                    <h6>{{format_idr(\App\Models\Koordinator::count())}}</h6>
                </li>
                <li class="col-4">
                    <small>Revenue</small>
                    <h6>0</h6>
                </li>
            </ul> --}}
        </div>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#menu">Menu</a></li>
            {{-- <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#setting"><i class="icon-settings"></i></a></li>
            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#question"><i class="icon-question"></i></a></li>                 --}}
        </ul>
        <!-- Tab panes -->
        <div class="tab-content p-l-0 p-r-0">
            <div class="tab-pane active" id="menu">
                <nav id="left-sidebar-nav" class="sidebar-nav">
                    <ul id="main-menu" class="metismenu">    
                        @if(\Auth::user()->user_access_id==1 || \Auth::user()->user_access_id==5)<!--Administrator-->                   
                            <li class="{{ Request::segment(1) === 'dashboard' ? 'active' : null }}">
                                <a href="/"><i class="icon-home"></i> <span>Dashboard</span></a>
                            </li>
                            <li class="{{ Request::segment(1) === 'user-member' ? 'active' : null }}">
                                <a href="{{route('user-member.index')}}"><i class="icon-users"></i> <span>Anggota</span></a>
                            </li>
                            <li class="{{ Request::segment(1) === 'iuran' ? 'active' : null }}">
                                <a href="{{route('simpanan.index')}}"><i class="fa fa-list"></i> <span>Simpanan</span></a>
                            </li>
                            <li class="{{ Request::segment(1) === 'iuran' ? 'active' : null }}">
                                <a href="{{route('pinjaman.index')}}"><i class="fa fa-list"></i> <span>Pinjaman</span></a>
                            </li>
                            <li class="{{ Request::segment(1) === 'iuran' ? 'active' : null }}">
                                <a href="{{route('shu.index')}}"><i class="fa fa-list"></i> <span>SHU</span></a>
                            </li>
                            <li class="{{ (Request::segment(1) === 'bank-account') ? 'active' : null }}">
                                <a href="{{route('bank-account.index')}}"><i class="fa fa-bank"></i>Bank Account</a>
                            </li>
                            <li class="{{ (Request::segment(1) === 'setting') ? 'active' : null }}">
                                <a href="{{route('setting')}}"><i class="fa fa-gear"></i>Setting</a>
                            </li>
                        @endif
                        @if(\Auth::user()->user_access_id==2)<!--Ketua Yayasan-->     
                        <li class="{{ Request::segment(2) === 'member' ? 'active' : null }}">
                            <a href="{{route('ketua-yayasan.member')}}"><i class="fa fa-users"></i> <span>Anggota</span></a>
                        </li>
                        <li class="{{ Request::segment(2) === 'klaim' ? 'active' : null }}">
                            <a href="{{route('ketua-yayasan.klaim')}}"><i class="fa fa-database"></i> <span>Klaim</span></a>
                        </li>
                        @endif
                        @if(\Auth::user()->user_access_id==3)<!--Kordinator-->  
                        <li class="{{ Request::segment(3) === 'biodata' ? 'active' : null }}">
                            <a href="{{route('koordinator.biodata')}}"><i class="fa fa-users"></i> <span>Biodata</span></a>
                        </li> 
                        {{-- <li class="{{ Request::segment(3) === 'iuran' ? 'active' : null }}">
                            <a href="{{route('koordinator.iuran')}}"><i class="fa fa-database"></i> <span>Iuran</span></a>
                        </li> --}}
                        <li class="{{ Request::segment(3) === 'member' ? 'active' : null }}">
                            <a href="{{route('koordinator.member')}}"><i class="fa fa-users"></i> <span>Anggota</span></a>
                        </li>
                        <li class="{{ Request::segment(3) === 'iuranmember' ? 'active' : null }}">
                            <a href="{{route('koordinator.iuranmember')}}"><i class="fa fa-database"></i> <span>Iuran Anggota</span></a>
                        </li>
                        @endif
                        @if(\Auth::user()->user_access_id==4)<!--Anggota-->     
                        <li class="{{ Request::segment(4) === 'member' ? 'active' : null }}">
                            <a href="{{route('anggota.member')}}"><i class="fa fa-users"></i> <span>Biodata</span></a>
                        </li>
                        <li class="{{ Request::segment(4) === 'iuran' ? 'active' : null }}">
                            <a href="{{route('anggota.iuran')}}"><i class="fa fa-database"></i> <span>Iuran</span></a>
                        </li>
                        @endif
                        @if(\Auth::user()->user_access_id==5)<!--Kasir-->     
                        <li class="{{ Request::segment(2) === 'member' ? 'active' : null }}">
                            <a href="{{route('kasir.index')}}"><i class="fa fa-home"></i> <span>Dashboard</span></a>
                        </li>
                        @endif
                    </ul>
                </nav>
            </div>      
        </div>          
    </div>
</div>
