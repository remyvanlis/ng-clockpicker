/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ClockPickerService } from '../../services/clock-picker.service';
import { scaleIn } from '../../animations/scale-in';
import { config } from '../../utils/constants';
var CircleComponent = /** @class */ (function () {
    function CircleComponent(clockPickerService) {
        this.clockPickerService = clockPickerService;
        this.onItemChange = new EventEmitter();
    }
    Object.defineProperty(CircleComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return config[this.mode];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleComponent.prototype, "mode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleComponent.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this.clockPickerService.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} item
     * @return {?}
     */
    CircleComponent.prototype.isSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return this.selected[this.mode] === item;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CircleComponent.prototype.handleClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.onItemChange.emit(item);
    };
    CircleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-circle',
                    template: "<div\n  [@scaleIn]=\"mode\"\n  class=\"clock-picker__circle\"\n  [ngClass]=\"{\n    'clock-picker__circle--minutes': clockPickerService.isMinutesMode,\n    'clock-picker__circle--hours': clockPickerService.isHoursMode\n  }\">\n  <ng-circle-button\n    [selected]=\"isSelected(item)\"\n    (click)=\"handleClick(item)\"\n    *ngFor=\"let item of items\">\n      {{item}}\n  </ng-circle-button>\n</div>\n",
                    animations: [scaleIn],
                    encapsulation: ViewEncapsulation.None,
                    styles: [".clock-picker__circle{border-radius:50%;border:30px solid #f2f2f2;background-color:#f2f2f2}.clock-picker__circle--minutes{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--minutes>*{justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px;display:none}.clock-picker__circle--minutes>:nth-of-type(1){-webkit-transform:rotate(-90deg) translate(110px) rotate(90deg);transform:rotate(-90deg) translate(110px) rotate(90deg)}.clock-picker__circle--minutes>:nth-of-type(2){-webkit-transform:rotate(-84deg) translate(110px) rotate(84deg);transform:rotate(-84deg) translate(110px) rotate(84deg)}.clock-picker__circle--minutes>:nth-of-type(3){-webkit-transform:rotate(-78deg) translate(110px) rotate(78deg);transform:rotate(-78deg) translate(110px) rotate(78deg)}.clock-picker__circle--minutes>:nth-of-type(4){-webkit-transform:rotate(-72deg) translate(110px) rotate(72deg);transform:rotate(-72deg) translate(110px) rotate(72deg)}.clock-picker__circle--minutes>:nth-of-type(5){-webkit-transform:rotate(-66deg) translate(110px) rotate(66deg);transform:rotate(-66deg) translate(110px) rotate(66deg)}.clock-picker__circle--minutes>:nth-of-type(6){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--minutes>:nth-of-type(7){-webkit-transform:rotate(-54deg) translate(110px) rotate(54deg);transform:rotate(-54deg) translate(110px) rotate(54deg)}.clock-picker__circle--minutes>:nth-of-type(8){-webkit-transform:rotate(-48deg) translate(110px) rotate(48deg);transform:rotate(-48deg) translate(110px) rotate(48deg)}.clock-picker__circle--minutes>:nth-of-type(9){-webkit-transform:rotate(-42deg) translate(110px) rotate(42deg);transform:rotate(-42deg) translate(110px) rotate(42deg)}.clock-picker__circle--minutes>:nth-of-type(10){-webkit-transform:rotate(-36deg) translate(110px) rotate(36deg);transform:rotate(-36deg) translate(110px) rotate(36deg)}.clock-picker__circle--minutes>:nth-of-type(11){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--minutes>:nth-of-type(12){-webkit-transform:rotate(-24deg) translate(110px) rotate(24deg);transform:rotate(-24deg) translate(110px) rotate(24deg)}.clock-picker__circle--minutes>:nth-of-type(13){-webkit-transform:rotate(-18deg) translate(110px) rotate(18deg);transform:rotate(-18deg) translate(110px) rotate(18deg)}.clock-picker__circle--minutes>:nth-of-type(14){-webkit-transform:rotate(-12deg) translate(110px) rotate(12deg);transform:rotate(-12deg) translate(110px) rotate(12deg)}.clock-picker__circle--minutes>:nth-of-type(15){-webkit-transform:rotate(-6deg) translate(110px) rotate(6deg);transform:rotate(-6deg) translate(110px) rotate(6deg)}.clock-picker__circle--minutes>:nth-of-type(16){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--minutes>:nth-of-type(17){-webkit-transform:rotate(6deg) translate(110px) rotate(-6deg);transform:rotate(6deg) translate(110px) rotate(-6deg)}.clock-picker__circle--minutes>:nth-of-type(18){-webkit-transform:rotate(12deg) translate(110px) rotate(-12deg);transform:rotate(12deg) translate(110px) rotate(-12deg)}.clock-picker__circle--minutes>:nth-of-type(19){-webkit-transform:rotate(18deg) translate(110px) rotate(-18deg);transform:rotate(18deg) translate(110px) rotate(-18deg)}.clock-picker__circle--minutes>:nth-of-type(20){-webkit-transform:rotate(24deg) translate(110px) rotate(-24deg);transform:rotate(24deg) translate(110px) rotate(-24deg)}.clock-picker__circle--minutes>:nth-of-type(21){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--minutes>:nth-of-type(22){-webkit-transform:rotate(36deg) translate(110px) rotate(-36deg);transform:rotate(36deg) translate(110px) rotate(-36deg)}.clock-picker__circle--minutes>:nth-of-type(23){-webkit-transform:rotate(42deg) translate(110px) rotate(-42deg);transform:rotate(42deg) translate(110px) rotate(-42deg)}.clock-picker__circle--minutes>:nth-of-type(24){-webkit-transform:rotate(48deg) translate(110px) rotate(-48deg);transform:rotate(48deg) translate(110px) rotate(-48deg)}.clock-picker__circle--minutes>:nth-of-type(25){-webkit-transform:rotate(54deg) translate(110px) rotate(-54deg);transform:rotate(54deg) translate(110px) rotate(-54deg)}.clock-picker__circle--minutes>:nth-of-type(26){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--minutes>:nth-of-type(27){-webkit-transform:rotate(66deg) translate(110px) rotate(-66deg);transform:rotate(66deg) translate(110px) rotate(-66deg)}.clock-picker__circle--minutes>:nth-of-type(28){-webkit-transform:rotate(72deg) translate(110px) rotate(-72deg);transform:rotate(72deg) translate(110px) rotate(-72deg)}.clock-picker__circle--minutes>:nth-of-type(29){-webkit-transform:rotate(78deg) translate(110px) rotate(-78deg);transform:rotate(78deg) translate(110px) rotate(-78deg)}.clock-picker__circle--minutes>:nth-of-type(30){-webkit-transform:rotate(84deg) translate(110px) rotate(-84deg);transform:rotate(84deg) translate(110px) rotate(-84deg)}.clock-picker__circle--minutes>:nth-of-type(31){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--minutes>:nth-of-type(32){-webkit-transform:rotate(96deg) translate(110px) rotate(-96deg);transform:rotate(96deg) translate(110px) rotate(-96deg)}.clock-picker__circle--minutes>:nth-of-type(33){-webkit-transform:rotate(102deg) translate(110px) rotate(-102deg);transform:rotate(102deg) translate(110px) rotate(-102deg)}.clock-picker__circle--minutes>:nth-of-type(34){-webkit-transform:rotate(108deg) translate(110px) rotate(-108deg);transform:rotate(108deg) translate(110px) rotate(-108deg)}.clock-picker__circle--minutes>:nth-of-type(35){-webkit-transform:rotate(114deg) translate(110px) rotate(-114deg);transform:rotate(114deg) translate(110px) rotate(-114deg)}.clock-picker__circle--minutes>:nth-of-type(36){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--minutes>:nth-of-type(37){-webkit-transform:rotate(126deg) translate(110px) rotate(-126deg);transform:rotate(126deg) translate(110px) rotate(-126deg)}.clock-picker__circle--minutes>:nth-of-type(38){-webkit-transform:rotate(132deg) translate(110px) rotate(-132deg);transform:rotate(132deg) translate(110px) rotate(-132deg)}.clock-picker__circle--minutes>:nth-of-type(39){-webkit-transform:rotate(138deg) translate(110px) rotate(-138deg);transform:rotate(138deg) translate(110px) rotate(-138deg)}.clock-picker__circle--minutes>:nth-of-type(40){-webkit-transform:rotate(144deg) translate(110px) rotate(-144deg);transform:rotate(144deg) translate(110px) rotate(-144deg)}.clock-picker__circle--minutes>:nth-of-type(41){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--minutes>:nth-of-type(42){-webkit-transform:rotate(156deg) translate(110px) rotate(-156deg);transform:rotate(156deg) translate(110px) rotate(-156deg)}.clock-picker__circle--minutes>:nth-of-type(43){-webkit-transform:rotate(162deg) translate(110px) rotate(-162deg);transform:rotate(162deg) translate(110px) rotate(-162deg)}.clock-picker__circle--minutes>:nth-of-type(44){-webkit-transform:rotate(168deg) translate(110px) rotate(-168deg);transform:rotate(168deg) translate(110px) rotate(-168deg)}.clock-picker__circle--minutes>:nth-of-type(45){-webkit-transform:rotate(174deg) translate(110px) rotate(-174deg);transform:rotate(174deg) translate(110px) rotate(-174deg)}.clock-picker__circle--minutes>:nth-of-type(46){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--minutes>:nth-of-type(47){-webkit-transform:rotate(186deg) translate(110px) rotate(-186deg);transform:rotate(186deg) translate(110px) rotate(-186deg)}.clock-picker__circle--minutes>:nth-of-type(48){-webkit-transform:rotate(192deg) translate(110px) rotate(-192deg);transform:rotate(192deg) translate(110px) rotate(-192deg)}.clock-picker__circle--minutes>:nth-of-type(49){-webkit-transform:rotate(198deg) translate(110px) rotate(-198deg);transform:rotate(198deg) translate(110px) rotate(-198deg)}.clock-picker__circle--minutes>:nth-of-type(50){-webkit-transform:rotate(204deg) translate(110px) rotate(-204deg);transform:rotate(204deg) translate(110px) rotate(-204deg)}.clock-picker__circle--minutes>:nth-of-type(51){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--minutes>:nth-of-type(52){-webkit-transform:rotate(216deg) translate(110px) rotate(-216deg);transform:rotate(216deg) translate(110px) rotate(-216deg)}.clock-picker__circle--minutes>:nth-of-type(53){-webkit-transform:rotate(222deg) translate(110px) rotate(-222deg);transform:rotate(222deg) translate(110px) rotate(-222deg)}.clock-picker__circle--minutes>:nth-of-type(54){-webkit-transform:rotate(228deg) translate(110px) rotate(-228deg);transform:rotate(228deg) translate(110px) rotate(-228deg)}.clock-picker__circle--minutes>:nth-of-type(55){-webkit-transform:rotate(234deg) translate(110px) rotate(-234deg);transform:rotate(234deg) translate(110px) rotate(-234deg)}.clock-picker__circle--minutes>:nth-of-type(56){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--minutes>:nth-of-type(57){-webkit-transform:rotate(246deg) translate(110px) rotate(-246deg);transform:rotate(246deg) translate(110px) rotate(-246deg)}.clock-picker__circle--minutes>:nth-of-type(58){-webkit-transform:rotate(252deg) translate(110px) rotate(-252deg);transform:rotate(252deg) translate(110px) rotate(-252deg)}.clock-picker__circle--minutes>:nth-of-type(59){-webkit-transform:rotate(258deg) translate(110px) rotate(-258deg);transform:rotate(258deg) translate(110px) rotate(-258deg)}.clock-picker__circle--minutes>:nth-of-type(60){-webkit-transform:rotate(264deg) translate(110px) rotate(-264deg);transform:rotate(264deg) translate(110px) rotate(-264deg)}.clock-picker__circle--minutes>:nth-child(5n+1){display:block}.clock-picker__circle--hours{position:relative;width:220px;height:220px;padding:0;border-radius:50%;list-style:none}.clock-picker__circle--hours>*{display:flex;justify-content:center;align-items:center;position:absolute;top:50%;left:50%;width:50px;height:50px;margin:-25px}.clock-picker__circle--hours>:nth-of-type(1){-webkit-transform:rotate(-60deg) translate(110px) rotate(60deg);transform:rotate(-60deg) translate(110px) rotate(60deg)}.clock-picker__circle--hours>:nth-of-type(2){-webkit-transform:rotate(-30deg) translate(110px) rotate(30deg);transform:rotate(-30deg) translate(110px) rotate(30deg)}.clock-picker__circle--hours>:nth-of-type(3){-webkit-transform:rotate(0) translate(110px) rotate(0);transform:rotate(0) translate(110px) rotate(0)}.clock-picker__circle--hours>:nth-of-type(4){-webkit-transform:rotate(30deg) translate(110px) rotate(-30deg);transform:rotate(30deg) translate(110px) rotate(-30deg)}.clock-picker__circle--hours>:nth-of-type(5){-webkit-transform:rotate(60deg) translate(110px) rotate(-60deg);transform:rotate(60deg) translate(110px) rotate(-60deg)}.clock-picker__circle--hours>:nth-of-type(6){-webkit-transform:rotate(90deg) translate(110px) rotate(-90deg);transform:rotate(90deg) translate(110px) rotate(-90deg)}.clock-picker__circle--hours>:nth-of-type(7){-webkit-transform:rotate(120deg) translate(110px) rotate(-120deg);transform:rotate(120deg) translate(110px) rotate(-120deg)}.clock-picker__circle--hours>:nth-of-type(8){-webkit-transform:rotate(150deg) translate(110px) rotate(-150deg);transform:rotate(150deg) translate(110px) rotate(-150deg)}.clock-picker__circle--hours>:nth-of-type(9){-webkit-transform:rotate(180deg) translate(110px) rotate(-180deg);transform:rotate(180deg) translate(110px) rotate(-180deg)}.clock-picker__circle--hours>:nth-of-type(10){-webkit-transform:rotate(210deg) translate(110px) rotate(-210deg);transform:rotate(210deg) translate(110px) rotate(-210deg)}.clock-picker__circle--hours>:nth-of-type(11){-webkit-transform:rotate(240deg) translate(110px) rotate(-240deg);transform:rotate(240deg) translate(110px) rotate(-240deg)}.clock-picker__circle--hours>:nth-of-type(12){-webkit-transform:rotate(270deg) translate(110px) rotate(-270deg);transform:rotate(270deg) translate(110px) rotate(-270deg)}"]
                }] }
    ];
    /** @nocollapse */
    CircleComponent.ctorParameters = function () { return [
        { type: ClockPickerService }
    ]; };
    CircleComponent.propDecorators = {
        onItemChange: [{ type: Output }]
    };
    return CircleComponent;
}());
export { CircleComponent };
if (false) {
    /** @type {?} */
    CircleComponent.prototype.onItemChange;
    /** @type {?} */
    CircleComponent.prototype.clockPickerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWNsb2NrLXBpY2tlci1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jaXJjbGUvY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5GLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHL0M7SUFVRSx5QkFBbUIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFGL0MsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVMLENBQUM7SUFFOUQsc0JBQUksa0NBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxxQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBQzFDLENBQUM7OztPQUFBOzs7OztJQUVELG9DQUFVOzs7O0lBQVYsVUFBVyxJQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsOFpBQXNDO29CQUV0QyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7b0JBQ3JCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBWFEsa0JBQWtCOzs7K0JBYXhCLE1BQU07O0lBdUJULHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0F4QlksZUFBZTs7O0lBQzFCLHVDQUFrRTs7SUFFdEQsNkNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2xvY2tQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2xvY2stcGlja2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2NhbGVJbiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMvc2NhbGUtaW4nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNlbGVjdGVkVGltZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy1jaXJjbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2lyY2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2lyY2xlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtzY2FsZUluXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIG9uSXRlbUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNsb2NrUGlja2VyU2VydmljZTogQ2xvY2tQaWNrZXJTZXJ2aWNlKSB7IH1cblxuICBnZXQgaXRlbXMoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGNvbmZpZ1t0aGlzLm1vZGVdO1xuICB9XG5cbiAgZ2V0IG1vZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbG9ja1BpY2tlclNlcnZpY2UubW9kZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBTZWxlY3RlZFRpbWUge1xuICAgIHJldHVybiB0aGlzLmNsb2NrUGlja2VyU2VydmljZS5zZWxlY3RlZDtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoaXRlbTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRbdGhpcy5tb2RlXSA9PT0gaXRlbTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKGl0ZW06IG51bWJlcikge1xuICAgIHRoaXMub25JdGVtQ2hhbmdlLmVtaXQoaXRlbSk7XG4gIH1cbn1cbiJdfQ==