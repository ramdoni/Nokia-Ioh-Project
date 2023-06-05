<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class KasirEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message,$transaction_id;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($message,$transaction_id)
    {
        $this->message = $message;
        $this->transaction_id = $transaction_id;
    }

    public function broadcastOn()
    {
        return ['kasir'];
    }

    public function broadcastAs()
    {
        return 'bayar_qrcode';
    }
}
