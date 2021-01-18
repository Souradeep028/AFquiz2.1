/* Google ANALYTICS Helper

  gah: google analytics helper class
*/

let gah = {
  clickEvent: (param) => {
    gtag('event', 'action', { event_category: 'button_click', event_label: param });
  },
};
