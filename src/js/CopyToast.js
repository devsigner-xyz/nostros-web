import ClipboardJS from "clipboard";
import Toastify from 'toastify-js';

class CopyToast {
    constructor(element) {
        this.clipboard = new ClipboardJS(element);
        this.clipboard.on('success', (event) => {
            this.showToast(event);
            event.clearSelection();
        })
    }

    getMessage(event) {
        const element = event.trigger.id;
        switch (element) {
            case 'chat-pubkey':
                return 'Chat public key copied'
            case 'nostros-pubkey':
                return 'Public key copied'
            case 'lightning-address':
                return 'Lightning address copied'
            case 'bitcoin-address':
                return 'Bitcoin address copied'
            default:
                return 'Copied'
        }
    }

    showToast(event) {
        Toastify({
            text: this.getMessage(event),
            duration: 3000,
            close: true,
            gravity: "bottom",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#092541",
            }
        }).showToast();
    }
}

export default CopyToast;