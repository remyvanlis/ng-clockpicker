/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogComponent } from '../../classes/abstract-dialog';
import { VerticalEventHandler } from '../../classes/vertical-event-handler';
import { ClockPickerService } from '../../services/clock-picker.service';
import { config, MODE_MINUTES, MODE_HOURS, } from '../../utils/constants';
var ClockPickerDialogComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ClockPickerDialogComponent, _super);
    function ClockPickerDialogComponent(clockPickerService) {
        var _this = _super.call(this) || this;
        _this.clockPickerService = clockPickerService;
        return _this;
    }
    Object.defineProperty(ClockPickerDialogComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return config[this.clockPickerService.mode];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClockPickerDialogComponent.prototype, "fullTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.fullTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleClose = /**
     * @return {?}
     */
    function () {
        this.close(this.fullTime);
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.close(null); //
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleOverlayClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.closeOnOverlayClick) {
            this.cancel();
        }
    };
    /**
     * @param {?} movement
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovement = /**
     * @param {?} movement
     * @return {?}
     */
    function (movement) {
        switch (movement) {
            case VerticalEventHandler.MovementUp:
                return this.handleMovementUp();
            case VerticalEventHandler.MovementDown:
                return this.handleMovementDown();
        }
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovementUp = /**
     * @return {?}
     */
    function () {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.increment(MODE_HOURS)
            : this.clockPickerService.increment(MODE_MINUTES);
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleMovementDown = /**
     * @return {?}
     */
    function () {
        return this.clockPickerService.isHoursMode
            ? this.clockPickerService.decrement(MODE_HOURS)
            : this.clockPickerService.decrement(MODE_MINUTES);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.handleItemChange = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.clockPickerService.isHoursMode) {
            this.clockPickerService.setHours(item);
            this.clockPickerService.setModeToMinutes();
        }
        else {
            this.clockPickerService.setMinutes(item);
            this.close(this.fullTime);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerDialogComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clockPickerService.reset();
    };
    ClockPickerDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-clock-picker-dialog',
                    template: "<div [ngClass]=\"wrapperClassName\">\n  <div class=\"clock-picker__overlay\" (click)=\"handleOverlayClick($event)\"></div>\n  <div class=\"clock-picker__wrapper\">\n    <nav class=\"clock-picker__nav\">\n      <ng-time-display></ng-time-display>\n    </nav>\n    <ng-circle\n      (ngMovementEmitter)=\"handleMovement($event)\"\n      (onItemChange)=\"handleItemChange($event)\"\n    ></ng-circle>\n    <footer class=\"clock-picker__footer\">\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"cancel()\"\n      >\n        {{buttonClose}}\n      </button>\n      <button\n        class=\"clock-picker__footer__dialog-control-button\"\n        (click)=\"handleClose()\"\n      >\n        {{buttonConfirm}}\n      </button>\n    </footer>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".clock-picker__wrapper{width:300px;height:auto;top:50%;right:auto;bottom:auto;left:50%;position:fixed;display:flex;flex-direction:column;align-items:center;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);box-shadow:1px 2px 30px rgba(0,0,0,.2)}.clock-picker__overlay{width:100vw;height:100vh;top:0;right:auto;bottom:auto;left:0;position:fixed;background-color:rgba(242,242,242,.6)}.clock-picker__footer,.clock-picker__nav{width:100%;height:70px;background-color:#f2f2f2}.clock-picker__nav{display:flex;justify-content:center;align-items:center;margin-bottom:10px}.clock-picker__footer{box-sizing:border-box;padding:0 5px;display:flex;align-items:center;justify-content:flex-end;margin-top:10px;background-color:#f2f2f2}.clock-picker__footer__dialog-control-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:none;outline:0;padding:5px;cursor:pointer;font:400 16px Arial,Helvetica,sans-serif;color:#495351}"]
                }] }
    ];
    /** @nocollapse */
    ClockPickerDialogComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    return ClockPickerDialogComponent;
}(DialogComponent));
export { ClockPickerDialogComponent };
if (false) {
    /** @type {?} */
    ClockPickerDialogComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jbG9jay1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2xvY2stcGlja2VyLWRpYWxvZy9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXpFLE9BQU8sRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CO0lBT2dELHNEQUFlO0lBQzdELG9DQUFtQixrQkFBc0M7UUFBekQsWUFBNkQsaUJBQU8sU0FBRztRQUFwRCx3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COztJQUFhLENBQUM7SUFFdkUsc0JBQUksNkNBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsMkNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDdEIsQ0FBQzs7Ozs7SUFFRCx1REFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBWTtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7OztJQUVELG1EQUFjOzs7O0lBQWQsVUFBZSxRQUFnQjtRQUM3QixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLG9CQUFvQixDQUFDLFVBQVU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDakMsS0FBSyxvQkFBb0IsQ0FBQyxZQUFZO2dCQUNwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELHFEQUFnQjs7O0lBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVztZQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELHVEQUFrQjs7O0lBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVztZQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7WUFDL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxxREFBZ0I7Ozs7SUFBaEIsVUFBaUIsSUFBWTtRQUMzQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFFRCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyw4eUJBQW1EO29CQUVuRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQWJRLGtCQUFrQjs7SUE0RTNCLGlDQUFDO0NBQUEsQUFwRUQsQ0FPZ0QsZUFBZSxHQTZEOUQ7U0E3RFksMEJBQTBCOzs7SUFDekIsd0RBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NsYXNzZXMvYWJzdHJhY3QtZGlhbG9nJztcbmltcG9ydCB7IFZlcnRpY2FsRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vY2xhc3Nlcy92ZXJ0aWNhbC1ldmVudC1oYW5kbGVyJ1xuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBjb25maWcsXG4gIE1PREVfTUlOVVRFUyxcbiAgTU9ERV9IT1VSUyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctY2xvY2stcGlja2VyLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay1waWNrZXItZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2xvY2stcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcblxuZXhwb3J0IGNsYXNzIENsb2NrUGlja2VyRGlhbG9nQ29tcG9uZW50IGV4dGVuZHMgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IHN1cGVyKCk7IH1cblxuICBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLmNsb2NrUGlja2VyU2VydmljZS5tb2RlXTtcbiAgfVxuXG4gIGdldCBmdWxsVGltZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5mdWxsVGltZTtcbiAgfVxuXG4gIGhhbmRsZUNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2UodGhpcy5mdWxsVGltZSk7XG4gIH1cblxuICBjYW5jZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZShudWxsKTsgLy9cbiAgfVxuXG4gIGhhbmRsZU92ZXJsYXlDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICh0aGlzLmNsb3NlT25PdmVybGF5Q2xpY2spIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW92ZW1lbnQobW92ZW1lbnQ6IHN0cmluZykge1xuICAgIHN3aXRjaCAobW92ZW1lbnQpIHtcbiAgICAgIGNhc2UgVmVydGljYWxFdmVudEhhbmRsZXIuTW92ZW1lbnRVcDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZW1lbnRVcCgpO1xuICAgICAgY2FzZSBWZXJ0aWNhbEV2ZW50SGFuZGxlci5Nb3ZlbWVudERvd246XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVtZW50RG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50VXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmlzSG91cnNNb2RlXG4gICAgICA/IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmluY3JlbWVudChNT0RFX0hPVVJTKVxuICAgICAgOiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5pbmNyZW1lbnQoTU9ERV9NSU5VVEVTKTtcbiAgfVxuXG4gIGhhbmRsZU1vdmVtZW50RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGVcbiAgICAgID8gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuZGVjcmVtZW50KE1PREVfSE9VUlMpXG4gICAgICA6IHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLmRlY3JlbWVudChNT0RFX01JTlVURVMpO1xuICB9XG5cbiAgaGFuZGxlSXRlbUNoYW5nZShpdGVtOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jbG9ja1BpY2tlclNlcnZpY2UuaXNIb3Vyc01vZGUpIHtcbiAgICAgIHRoaXMuY2xvY2tQaWNrZXJTZXJ2aWNlLnNldEhvdXJzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9ja1BpY2tlclNlcnZpY2Uuc2V0TW9kZVRvTWludXRlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZXRNaW51dGVzKGl0ZW0pO1xuICAgICAgdGhpcy5jbG9zZSh0aGlzLmZ1bGxUaW1lKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5yZXNldCgpO1xuICB9XG59XG4iXX0=