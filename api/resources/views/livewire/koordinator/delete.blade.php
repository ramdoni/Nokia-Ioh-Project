<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-warning"></i> Confirm Delete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true close-btn">×</span>
        </button>
    </div>
    <div class="modal-body">
        <form>
            <p>Are you want delete this data ?</p>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary close-btn" data-dismiss="modal">No</button>
        <button type="button" class="btn btn-danger" wire:click="delete">Yes</button>
    </div>
</div>