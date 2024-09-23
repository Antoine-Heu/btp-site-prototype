import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Importez vos contrôleurs ici
import HelloController from "./assets/js/controllers"

application.register("hello", HelloController)
