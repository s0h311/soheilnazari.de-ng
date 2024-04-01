import {
  AfterViewInit,
  Injectable,
  OnDestroy,
  computed,
  signal,
} from '@angular/core'

type WindowSize = {
  width: number
  height: number
}

type DeviceType = {
  windowSize: WindowSize
  isMobile: boolean
}

@Injectable({
  providedIn: 'root',
})
export class DeviceTypeService {
  public isMobile = computed<boolean>(() => {
    if (typeof window === 'undefined') {
      return false
    }
    return window.innerWidth < 680
  })
}
