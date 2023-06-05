@section('title', "Edit Asuransi")
@section('parentPageTitle', 'Asuransi')
<div class="container">
    <div class="mt-2 card">
      <div class="card-body">
        <form class="form-auth-small" method="POST" wire:submit.prevent="save">
            <div class="row">
                <div class="col-md-12">
                    <h5>DATA ASURANSI ANGGOTA</h5>
                    <hr />
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputName">POLICY NO</label>
                        <input type="text" class="form-control" id="policyno" wire:model="policyno">
                        @error('policyno') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">PARTNER NAME</label>
                        <input type="text" class="form-control" id="productname" wire:model="productname">
                        @error('productname') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">PRODUCT NAME</label>
                        <input type="text" class="form-control" id="partnername" wire:model="partnername">
                        @error('partnername') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">MEMBER NO STR</label>
                        <input type="text" class="form-control" id="membernostr" wire:model="membernostr">
                        @error('membernostr') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">NAME</label>
                        <input type="text" class="form-control" id="name" wire:model="name">
                        @error('name') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">ID KTP</label>
                        <input type="text" class="form-control" id="nik" wire:model="nik" readonly="true">
                        @error('nik') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">DOB</label>
                        <input type="date" class="form-control datepicker" id="dob" wire:model="dob">
                        @error('dob') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">AGE</label>
                        <input type="text" class="form-control" id="age" wire:model="age">
                        @error('age') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                     <div class="form-group">
                        <label for="exampleInputName">START DATE</label>
                        <input type="date" class="form-control datepicker" id="startdate" wire:model="startdate">
                        @error('startdate') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">END DATE</label>
                        <input type="date" class="form-control datepicker" id="enddate" wire:model="enddate">
                        @error('enddate') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">TERM</label>
                        <input type="text" class="form-control" id="term" wire:model="term">
                        @error('term') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="exampleInputName">UP</label>
                        <input type="text" class="form-control" id="up" wire:model="up">
                        @error('up') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">PREMI</label>
                        <input type="text" class="form-control" id="premi" wire:model="premi">
                        @error('premi') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">MORTALITA</label>
                        <input type="text" class="form-control" id="mortalita" wire:model="mortalita">
                        @error('mortalita') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">EKSTRA PREMI</label>
                        <input type="text" class="form-control" id="ekstra_premi" wire:model="ekstra_premi">
                        @error('ekstra_premi') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">TOTAL PREMI</label>
                        <input type="text" class="form-control" id="total_premi" wire:model="total_premi">
                        @error('total_premi') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">MEDICAL TYPE</label>
                        <input type="text" class="form-control" id="medicaltype" wire:model="medicaltype">
                        @error('medicaltype') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">NO INVOICE</label>
                        <input type="text" class="form-control" id="noinvoice" wire:model="noinvoice">
                        @error('noinvoice') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">NO REG</label>
                        <input type="text" class="form-control" id="noreg" wire:model="noreg">
                        @error('noreg') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">ACCEPT DATE</label>
                        <input type="date" class="form-control datepicker" id="accept_date" wire:model="accept_date">
                        @error('accept_date') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">BATCHNO</label>
                        <input type="text" class="form-control" id="batchno" wire:model="batchno">
                        @error('batchno') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                    <div class="form-group">
                        <label for="exampleInputName">STNC REMARKS</label>
                        <input type="date" class="form-control datepicker" id="stnc_remarks" wire:model="stnc_remarks">
                        @error('stnc_remarks') <span class="text-danger">{{ $message }}</span> @enderror
                    </div>
                </div>
                
                
                <div class="form-group col-md-12">
                    <hr />
                    <a href="/"><i class="fa fa-arrow-left"></i> {{__('Back')}}</a>
                    <button type="submit" class="btn btn-primary ml-3"><i class="fa fa-save"></i> {{ __('Simpan') }}</button>  
                            
                </div>
            </div>
            
            
        </form>
      </div>
    </div>
</div>