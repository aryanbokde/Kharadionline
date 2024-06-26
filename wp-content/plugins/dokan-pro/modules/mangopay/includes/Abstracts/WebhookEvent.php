<?php

namespace WeDevs\DokanPro\Modules\MangoPay\Abstracts;

/**
 * Class WebhookEventsHandler
 *
 * @since 3.5.0
 *
 * @author weDevs
 */
abstract class WebhookEvent {

    /**
     * Event holder
     *
     * @var string
     */
    private $event;

    /**
     * Handle the event
     *
     * @since 3.5.0
     *
     * @return void
     */
    abstract public function handle( $payload );

    /**
     * Set event
     *
     * @param string $event
     *
     * @since 3.5.0
     *
     * @return void
     */
    public function set_event( $event ) {
        $this->event = $event;
    }

    /**
     * Get event
     *
     * @since 3.5.0
     *
     * @return string
     */
    public function get_event() {
        return $this->event;
    }
}
