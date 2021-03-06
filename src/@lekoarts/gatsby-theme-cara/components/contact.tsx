/** @jsx jsx */
import { jsx } from "theme-ui"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact"
import '../styles/contact.css'

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
        <form name="contact" method="POST" data-netlify="true">
          <div className='form-item'>
            <label>Your Name: </label>
            <input type="text" name="name" />   
          </div>
          <div className='form-item'>
            <label>Your Email: </label>
            <input type="email" name="email" />
          </div>
          <div className='form-item'>
            <label>Message: </label>
            <textarea className='form-text' name="message"></textarea>
          </div>
          <button id='submit' type="submit">Send</button>
        </form>
      </Inner>
    </Content>
   
  </div>
)

export default Contact
