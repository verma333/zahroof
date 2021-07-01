
import { gql } from 'apollo-boost';

// CITY QUERIES START ----------------------------

 



export const HOMEPAGE = gql`
query MyQuery {
  page(id: "cG9zdDo2") {
    title
    pageId
    uri
    status
    homebannercontent
    honebannerimageurl
    firstLeftBgimage
    firstLeftHeading
    firstLeftIcon
    firstLeftTitle
    firstRightBgimage
    firstRightHeading
    firstRightIcon
    firstRightTitle
    homeSecondLeftContent
    homeSecondRightImageOne
    homeSecondRightTitleOne
    homeSecondRightImageTwo
    homeSecondRightTitleTwo
    homeSecondRightImageThree
    homeSecondRightTitleThree
    homeSecondRightImageFour
    homeSecondRightTitleFour
    homeThreeLeftHeading
    homeThreeRightHeading
    homeThreeRightLink
    homeFourHeading
    homeFourImageurl
    homeFiveImageurl
    homeFiveRightContent
    homeSixCaseStudyContent
    homeSixCaseStudyButtonUrl
    homeSixRightOneImage
    homeSixRightOneName
    homeSixRightTwoImage
    homeSixRightTwoName
    content
    seo {
      title
      metaDesc
      metaKeywords
      focuskw
      canonical
      cornerstone
      fullHead
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      twitterDescription
      twitterTitle
    }
  }
  

}
`


export const CONTACTUS = gql`

query MyQuery {
  page(id: "cG9zdDo0OQ==") {
    id
    pageId
    title
    featuredImage {
      node {
        title
        sourceUrl
      }
    }
    content
    contactaddress
    seo {
      title
      metaDesc
      metaKeywords
      focuskw
      canonical
      cornerstone
      fullHead
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      twitterDescription
      twitterTitle
    }
  }



 
  
  

}
`



export const ESG = gql`
query MyQuery {
 page(id: "cG9zdDozOQ==") {
    id
    pageId
    title
    featuredImage {
      node {
        title
        sourceUrl
      }
    }
    esgbenifitsbannerimage
    esgbenifitsbannerrightcontent
    esgbenifitsfirstleftcontent
    esgbenifitsfirstrightoneicon
    esgbenifitsfirstRightOneContent
    esgbenifitsfirstrighttwoicon
    esgbenifitsfirstRightTwoContent
    esgbenifitsfirstrightthreeicon
    esgbenifitsfirstRightThreeContent
    esgbenifitstwoleftcontent
    esgbenifitstworightoneicon
    esgbenifitstwoRightOneContent
    esgbenifitstworighttwoicon
    esgbenifitstwoRightTwoContent
    esgbenifitstworightthreeicon
    esgbenifitstwoRightThreeContent
    esgbenifitsthreerightcontent
    seo {
      title
      metaDesc
      metaKeywords
      focuskw
      canonical
      cornerstone
      fullHead
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      twitterDescription
      twitterTitle
    }
  }
  

}
`




export const ENTERPRISESOLUSOLUSTIONS = gql`
query MyQuery {
  page(id: "cG9zdDoyNA==") {
    title
    pageId
    uri
    status
    featuredImage {
      node {
        title
        sourceUrl
      }
    }
    enterprisetwoitemOneImage
    enterprisetwoitemOneTitle
    enterprisetwoitemTwoImage
    enterprisetwoitemTwoTitle
    enterprisetwoitemThreeImage
    enterprisetwoitemThreeTitle
    enterprisetwoitemFourImage
    enterprisetwoitemFourTitle
    enterprisetwoitemFiveImage
    enterprisetwoitemFiveTitle
    enterprisetwoitemSixImage
    enterprisetwoitemSixTitle
    enterprisefirstcontent
    enterprisefourLeftImage
    enterprisefourRightContent
    enterprisefourBottomContent
    enterprisefiveLeftIcon
    enterprisefiveLeftContent
    enterprisefiveRightIcon
    enterprisefiveRightContent
  }


}
`
// AUTH QUERIES END ----------------------------
