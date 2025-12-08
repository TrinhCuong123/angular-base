import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, inject } from "@angular/core";
import { BaseConfig } from "./base-config.service";
import { ProductEntity } from "../shared/entities/product.entities";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    protected readonly http = inject(HttpClient);
    protected readonly appConfig=inject(BaseConfig);

    protected readonly apiPath: string;

    constructor() {
        this.apiPath = `${this.appConfig.apiBaseUrl}/products`
    }

    get() {
        return this.http.get<ProductEntity[]>(this.apiPath);
    }

    getById(id: string | null = null) {
        return this.http.get<ProductEntity>(`${this.apiPath}/${id}`);
    }
}