import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
    /**
     * Include here all endpoints to be used
     * TODO: Should be created a better route service
     */
    public static API_ENDPOINT = {
        AUTH: 'http://localhost:9000/security',
        SALES: 'http://localhost:9001/sales'
    };

    public static HTTP_OPTIONS = {
        APP_JSON: {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        },
        APP_URLENCODED: {
          headers: new HttpHeaders()
            .append('Content-Type', 'application/x-www-form-urlencoded')
            .append('Authorization', 'Basic ' + btoa('secureserver:secureserversecret'))
        }
      };
}