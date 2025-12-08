import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BaseConfig {
    private baseConfig!: BaseConfig;
    readonly http = inject(HttpClient);

    loadConfig() {
        return firstValueFrom(this.http.get('/assets/configs/app-config.development.json')).then(config => 
            this.baseConfig = <BaseConfig>config
        )
    }

    get apiBaseUrl() : string {
        return this.baseConfig.apiBaseUrl;
    }
}