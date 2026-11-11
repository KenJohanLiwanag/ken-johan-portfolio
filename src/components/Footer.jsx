import { profile } from '../data/profile.js'
import './Footer.css'

// Computed once when the page loads (keeps render pure)
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <a href="#top" className="footer__top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
