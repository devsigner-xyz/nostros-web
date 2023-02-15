import './styles.scss'
import ClipboardJS from "clipboard";
import 'material-symbols/outlined.scss';

const clipboard = new ClipboardJS('.copy');
clipboard.on('success', (e) => {
    console.info('Text:', e.text);
    e.clearSelection();
});

document.querySelectorAll(".notification .delete")
    .forEach(($deleteButton) => {

        // Step 2: Get the parent notification
        // of the delete button
        const parentNotification = $deleteButton.parentNode;

        // Add click event listener on delete
        // button and when the button get clicked
        // remove the parent notification
        $deleteButton.addEventListener('click', () => {
            parentNotification.parentNode
                .removeChild(parentNotification);
        });
    });