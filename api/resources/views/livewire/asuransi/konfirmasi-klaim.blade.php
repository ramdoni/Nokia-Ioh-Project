<form wire:submit.prevent="save">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-plus"></i> Konfirmasi Pengajuan Klaim</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true close-btn">×</span>
        </button>
    </div>
    <div class="modal-body">
        <table class="table table-striped">
            <tr>
                <th>ID KTP</th>
                <td>{{isset($data->user_member->Id_Ktp) ? $data->user_member->Id_Ktp : ''}}</td>
            </tr>
            <tr>
                <th>Nama</th>
                <td>{{isset($data->user_member->name) ? $data->user_member->name : ''}}</td>
            </tr>
            <tr>
                <th>No Peserta</th>
                <td>{{isset($data->policyno) ? $data->policyno : ''}}</td>
            </tr>
            <tr>
                <th>Start Date</th>
                <td>{{isset($data->startdate) ? date('d-M-Y',strtotime($data->startdate)) : ''}}</td>
            </tr>
            <tr>
                <th>End Date</th>
                <td>{{isset($data->enddate) ? date('d-M-Y',strtotime($data->enddate)) : ''}}</td>
            </tr>
        </table>
    </div>
    <div class="modal-footer">
        <span wire:loading  wire:target="save">
            <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
            <span class="sr-only">{{ __('Loading...') }}</span>
        </span>
        <button type="submit" class="btn btn-info close-modal"><i class="fa fa-save"></i> Ajukan Klaim</button>
    </div>
</form>
