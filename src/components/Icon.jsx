import {
  Smartphone, Laptop, Printer, Headphones, Speaker, Watch, Plug,
  Gamepad2, BatteryCharging, Package,
} from 'lucide-react'

const map = { Smartphone, Laptop, Printer, Headphones, Speaker, Watch, Plug, Gamepad2, BatteryCharging }

export default function Icon({ name, className = 'h-6 w-6' }) {
  const Cmp = map[name] || Package
  return <Cmp className={className} aria-hidden="true" />
}
