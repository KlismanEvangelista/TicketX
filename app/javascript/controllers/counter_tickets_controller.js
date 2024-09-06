import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="counter-tickets"
export default class extends Controller {
  static targets = ["value", "price", "total", "quantity", "max"]

  connect() {
    // this.count = 0
  }

  sumar(event) {
    event.preventDefault()
    console.log(event)
    let count = parseInt(this.valueTarget.innerText, 10)
    if (count < this.cant_max()) {
      this.valueTarget.innerText = count + 1
    }
    this.total()
  }

  restar(event) {
    event.preventDefault()
    let count = this.valueTarget.innerText
    count = parseInt(count, 10)
    if (count > 0) {
      this.valueTarget.innerText = parseInt(count, 10) - 1
    }
    this.total()
  }

  cant_max() {
    const max = parseInt(this.maxTarget.innerText, 0)
    return max
  }

  total() {
    let price = parseFloat(this.priceTarget.innerText) || 0;
    let count = parseInt(this.valueTarget.innerText, 0)
    const total = count * price
    this.totalTarget.innerText = total.toFixed(2)
    this.quantityTarget.innerText = count
  }
}
