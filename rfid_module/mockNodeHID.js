module.exports = {
    devices: () => {
      console.warn('HID devices not available in this environment');
      return [];
    },
    HID: class {
      constructor() {
        console.warn('HID device not available in this environment');
      }
      on() {}
      write() {}
      sendFeatureReport() {}
    }
  };
  