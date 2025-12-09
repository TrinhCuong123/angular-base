import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";
import { permissions } from "../auth/permission";

@Directive({
    selector: '[permission]',
    standalone: true
})

export class PermissionDirection implements OnInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) {}
    
    @Input() permission: string = '';

    ngOnInit(): void {
        // console.log(this.permission.split(":"))
        // console.log(permissions.find(x => x.SubSystemCode = this.permission.split(":")[0]))
        // console.log((permissions.find(x => x.SubSystemCode = this.permission.split(":")[0]))?.Permissions.includes(this.permission.split(":")[1]));

        if ((permissions.find(x => x.SubSystemCode == this.permission.split(":")[0]))?.Permissions.includes(this.permission.split(":")[1])) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else  {
            this.viewContainer.clear();
        }
    }
}
