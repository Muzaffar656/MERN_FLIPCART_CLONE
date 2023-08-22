import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      title: "about",
      links: [
        {
          name: "Contact Us",
          redirect: "https://www.flipkart.com/helpcentre",
        },
        {
          name: "About Us",
          redirect: "https://www.flipkart.com/about-us",
        },
        {
          name: "Careers",
          redirect: "https://www.flipkartcareers.com",
        },
        {
          name: "Flipkart Stories",
          redirect: "https://stories.flipkart.com",
        },
        {
          name: "Press",
          redirect: "https://stories.flipkart.com/category/top-stories/news",
        },
        {
          name: "Flipkart Wholesale",
          redirect: "https://www.flipkartwholesale.com",
        },
        {
          name: "Corporate Information",
          redirect: "https://www.flipkart.com/corporate-information",
        },
      ]
    },
    {
      title: "help",
      links: [
        {
          name: "Payments",
          redirect: "https://www.flipkart.com/pages/payments",
        },
        {
          name: "Shipping",
          redirect: "https://www.flipkart.com/pages/shipping",
        },
        {
          name: "Cancellation & Returns",
          redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
        },
        {
          name: "FAQ",
          redirect: "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
        }
      ]
    },
    {
      title: "policy",
      links: [
        {
          name: "Return Policy",
          redirect: "https://www.flipkart.com/pages/returnpolicy",
        },
        {
          name: "Terms Of Use",
          redirect: "https://www.flipkart.com/pages/terms",
        },
        {
          name: "Security",
          redirect: "https://www.flipkart.com/pages/paymentsecurity",
        },
        {
          name: "Privacy",
          redirect: "https://www.flipkart.com/pages/privacypolicy",
        },
        {
          name: "Sitemap",
          redirect: "https://www.flipkart.com/sitemap",
        },
        {
          name: "EPR Compliance",
          redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
        },
      ]
    },
    {
      title: "social",
      links: [
        {
          name: "Facebook",
          redirect: "https://www.facebook.com/flipkart",
        },
        {
          name: "Twitter",
          redirect: "https://twitter.com/flipkart",
        },
        {
          name: "YouTube",
          redirect: "https://www.youtube.com/flipkart",
        }
      ]
    }
  ]
  return (
    <footer className=' w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden'>

        <div className="w-full sm:w-7/12 flex flex-col gap-10 sm:flex-row ">
          {
            footerLinks.map((el,i)=>(
              <div key={i} className='flex flex-col gap-3'>
                <h2 className=' capitalize'>{el.title}</h2>
                {
                  el.links.map((item,e)=>(
                
                    <a  href={item.redirect}>{item.name}</a>
                    
                  ))
                }
              </div>
            ))
          }
        </div>
 
    </footer>
  )
}

export default Footer
