const Recycle = {
  getDevice: (): string => {
    let resultDevice = '';
    if (window.navigator.userAgent.indexOf('Android') !== -1) {
      resultDevice = 'Android';
    } else if (window.navigator.userAgent.indexOf('iPhone') !== -1) {
      resultDevice = 'iPhone';
    } else {
      resultDevice = 'PC';
    }

    return resultDevice;
  }
};

export default Recycle;
