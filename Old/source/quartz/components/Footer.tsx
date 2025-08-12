import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`} style="font-size: 0.8rem;">
        <p style="margin-top: 0;">
          <strong>Copyright:</strong><br></br>
          © 2025 0x4248<br></br>
          © 2025 4248 Media, 4248 Music and 4248 Sound Recording, a part of 0x4248<br></br>
          Licensed under the Creative Commons Share-Alike Attribution License (CC BY-SA 4.0). <br></br>
          Some content may be under different licenses or copyrights and may be noted as such.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
