/** @jsx jsx */
import { jsx } from "theme-ui"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// @ts-ignore
import ContactMDX from "@lekoarts/gatsby-theme-cara/src/sections/contact"

const Contact = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
   
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      {/* <form name="contact" method="POST" data-netlify="true">
        <div>
          <label>Your Name: </label>
          <input type="text" name="name" />   
        </div>
        <div>
          <label>Your Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message: </label>
          <textarea name="message"></textarea>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form> */}
    </Content>
   
  </div>
)

export default Contact
