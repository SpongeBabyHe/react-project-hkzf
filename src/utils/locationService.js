// 简化的位置服务 - 只获取当前城市
class LocationService {
  constructor() {
    this.currentCity = '上海'; // 默认城市
    this.geocoder = null;
    this.initializeGeocoder();
  }

  // 初始化地理编码器
  initializeGeocoder() {
    if (window.google && window.google.maps && window.google.maps.Geocoder) {
      this.geocoder = new window.google.maps.Geocoder();
    } else {
      // 如果Google Maps还未加载，等待加载完成
      this.waitForGoogleMaps();
    }
  }

  // 等待Google Maps API加载完成
  waitForGoogleMaps() {
    const checkGoogleMaps = () => {
      if (window.google && window.google.maps && window.google.maps.Geocoder) {
        this.geocoder = new window.google.maps.Geocoder();
      } else {
        setTimeout(checkGoogleMaps, 100);
      }
    };
    checkGoogleMaps();
  }

  // 获取当前城市
  getCurrentCity() {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(this.currentCity);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.reverseGeocode(lat, lng).then(resolve);
        },
        () => {
          resolve(this.currentCity); // 定位失败时返回默认城市
        },
        { timeout: 5000 }
      );
    });
  }

  // 反向地理编码获取城市名称
  reverseGeocode(lat, lng) {
    return new Promise((resolve) => {
      if (!this.geocoder) {
        resolve(this.currentCity);
        return;
      }

      const latlng = new window.google.maps.LatLng(lat, lng);
      this.geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const addressComponents = results[0].address_components;

          for (let component of addressComponents) {
            if (component.types.includes('locality') ||
              component.types.includes('administrative_area_level_1')) {
              this.currentCity = component.long_name;
              resolve(this.currentCity);
              return;
            }
          }
        }
        resolve(this.currentCity);
      });
    });
  }
}

const locationService = new LocationService();
export default locationService;
