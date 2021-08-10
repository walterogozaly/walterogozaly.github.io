/* Most recent at top */

const articles = [
  {
    name: "uf-models",
    title: "University of Florida Advancement — Modeling Team",
    date: "April 16, 2021",
    author: "Walter Ogozaly",
    tags: ["portfolio"],
    content: [
      <b>Data Description</b>,
      <b>UF Advancement Click Data 5.35 MB</b>,
      <p>
        This data is in Excel format and grouped weekly. It includes the date of
        any donor household’s first and last visits to our website as well as
        the total number of visits. Only about 20,000 households out of ~500,000
        have made a recorded website visit. The model will import any
        spreadsheets that fit the click data’s naming convention so any new
        weekly files can be simply dropped in the relevant folder.
      </p>,
      <b>Demographic and Alumni data (Joined_Export_*) 732 MB</b>,
      <p>
        The bulk of our data, representing roughly 500,000 alum households, of
        which half have donated to UF. This data includes demographics
        (income/region/sex/married) as well as information related to alum
        activities and past donations.
      </p>,
      <b>Overall Findings</b>,
      <p>
        Our model identified 6,900 households with the highest propensity to
        become first-time donors to the Machen Florida Opportunity Scholarship
        (MFOS). A household was required to have a donation history with MFOS in
        order to be marked as a success case in the model’s training data, so
        these 6,900 households represent false positives identified by the
        model. Despite this, they are the desired contact group.
      </p>,
      <p>
        In order to predict who to contact for a donation in the next month, we
        should note that we assumed you should contact the people likeliest to
        donate. While this is a straightforward assumption, you could imagine a
        campaign directed at medium-to-low propensity households or a campaign
        that sought to avoid donors thought of as “safe” or “sure”. In such a
        case our model’s utility would be significantly decreased.
      </p>,
      <p>
        Two time lags were developed in order to make the most informed
        prediction of which households would donate over the next 31 days. One
        of these lags, formulated by looking at autocorrelation of donations
        since 2000, was 1 year—i.e., the most predictive interval between
        donations is 1 year, so we ought to look at April ‘20 donors when
        predicting April ‘21 donors. The other lag was any individual donor’s
        average MFOS donation interval. The model’s task was to identify the
        households that met either lag condition, with the caveat of not having
        access to ANY contact or donation variables. Forcing the model to rely
        on donation-independent variables prevented it from eliminating
        first-time donors on the basis of their first-time-ness, which would
        have run counter to the business need. False positives are valuable in
        our model output because we sought households who resembled the
        predicted upcoming donors in all ways except having a gift history with
        MFOS.
      </p>,
      <b>Code Handover</b>,
      <p>
        Our code is available on Github (
        <a href="https://github.com/walter97/UFF_Models">
          https://github.com/walter97/UFF_Models
        </a>
        ), but since the modeling was done entirely on a virtual machine the
        sponsor also has easy access to it via a shared folder.
      </p>,
    ],
  },
  {
    name: "learn-node",
    title: "How to Build a Node Server in 10 Minutes",
    date: "April 16, 2021",
    author: "Walter Ogozaly",
    content: [
      `In this article, we're going to be talking looking at a very quick way
            to set up a Node.js server. We'll be discussing some topics such as proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
  {
    name: "my-thoughts-on-resumes",
    title: "My Thoughts on Resumes",
    date: "April 16, 2021",
    author: "Walter Ogozaly",
    content: [
      `Today is the day I talk about something which scares most people: resumes.
            In reality, I'm not sure why people have such a hard time with proin congue
            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. 
            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, 
            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut 
            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at 
            sodales purus euismod.`,
      `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
      `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam. Vivamus accumsan dui in facilisis aliquet.`,
    ],
  },
];

export default articles;
