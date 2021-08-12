/* Most recent at top */

const articles = [
  {
    name: "lithium-ion-impacts",
    title:
      "How bad are electric cars (and lithium-ion batteries) for the environment?",
    date: "August 11, 2021",
    author: "Walter Ogozaly",
    tags: ["recreational"],
    content: [
      <p>
        Over the past year or so, it’s become more common among the people I
        read and talk with to express some hesitation about the environmental
        impacts of lithium mining. This is most common when talking about
        electric cars, but lithium-ion battery technology is in demand across
        the economy on account of its high energy density, competitive cost, and
        safety/reliability.
      </p>,
      <p>
        I wanted to know whether the impacts of lithium-ion electric cars are
        more local or global in scale. I suspected that the discourse around the
        issue was getting more pessimistic than is warranted, perhaps due to
        commentators who undervalue growth and therefore dismiss certain
        tradeoffs that I would accept.
      </p>,
      <p>
        Though the difference between the two is sometimes obscured, there is a
        great disparity between environmental damage at a local versus a global
        scope. Local damage may disrupt wildlife, uproot previously undisturbed
        forest, or cut deep gashes into the Earth—but its impacts do not
        directly exacerbate the global climate crisis (set aside minor details
        like deforestation of small amounts of land). During my childhood in
        Northeastern Pennsylvania, heart of the former anthracite coal industry,
        the road to Grandma’s cut through one such example of local damage:
        fields of coal spoil tips (coal is obviously not carbon-neutral
        overall).
      </p>,
      <img
        className="article-img"
        src="https://upload.wikimedia.org/wikipedia/commons/2/21/Coal_waste_pile_west_of_Trevorton%2C_Pennsylvania_far_shot_2.JPG"
      />,
      <p>
        Local impacts like the creation of coal spoil tips are certainly not
        desirable. They are tolerable to most, though, in the context of a world
        growing more prosperous overall. On the other hand, the impact of more
        widespread or global damage, primarily global warming, makes such damage
        unacceptable. It’s valuable to know which category of environmental
        impacts we’re talking about when we talk about electric cars.
      </p>,
      <p>
        <b>Cobalt</b>
      </p>,
      <p>
        Cobalt, of which a majority is sourced from the Democratic Republic of
        the Congo, is part of the NCA (nickel, cobalt, and aluminum) metal oxide
        that is accommodating of lithium and stabilizes it.
      </p>,
      <p>
        Nickel and cobalt are transition metals. They are very easy-come-easy-go
        with their electrons, whereas lithium has a high tendency to lose its
        electron. When a power source is applied to charge the lithium-ion
        battery, the electrons from this stable side of the battery are shuttled
        to the other side. Following their cue, the lithium leaves its stable
        oxide home and passes through a no-electrons-permitted barrier
        separating the two sides of the battery.
      </p>,
      <p>
        Once the power is turned off, this unstable state of affairs reverses
        itself. The lithium passes through the central layer and returns back to
        the oxide. The electrons flow back as well but must take the outside
        path, aka a wire, and that flow is electricity.
      </p>,
      <p>
        The trouble is that while you can reduce the proportion of cobalt in the
        NCA oxide mixture, which has been done already, you can’t get rid of it
        completely. Cobalt has a stabilizing effect on nickel which helps
        prevent cathode erosion and overheating. Overheating can ruin the
        no-electrons-permitted barrier and cause the battery to explode.
      </p>,
      <p>
        The necessity of cobalt, combined with the DRC’s stranglehold on supply
        and the impossibility of tracking who mined every piece of exported
        cobalt practically guarantees that some of it is obtained by child or
        slave labor.
      </p>,
      <p>
        <b>This post is in-progress.</b>
      </p>,
    ],
  },
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
];

export default articles;
