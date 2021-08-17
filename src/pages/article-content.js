/* Most recent at top */

const articles = [
  {
    name: "tableau-dashboards",
    title: "Exploring Tableau's best functions",
    date: "August 17, 2021",
    author: "Walter Ogozaly",
    tags: ["portfolio"],
    content: [
      <p>
        Tableau is a great business intelligence tool that makes seamless
        visualizations and dashboards much easier to create. The drag and drop
        workflow is quite pleasantly simple. Let's take a look at some of
        Tableau's best use cases, as well as how it might fit into a business's
        workflow. My university email is still active (#goGators!) so I'll be
        accessing Tableau through their subscription.
      </p>,
      <p>
        <b>Live Analytics with Tableau Server</b>
      </p>,
      <p>
        As I work with data and tech more, I've come to increasingly respect the
        power of data pipelines. A thoughtfully designed data pipeline is the
        difference between a static visual and a live, interactive online
        dashboard. Pipelines address the human need to be engaged, to know and
        respond rapidly to change, and to access information from anywhere. They
        also often address a business's real needs best (and they're pretty cool
        to boot).
      </p>,
      <p>
        Connecting high-level components of your business can be personally
        satisfying and empowering, as corny as that may sound. The first time I
        created a server-hosted database and connected it to a React front end,
        I really felt how the utility of both tools was now greater than the sum
        of its parts. Hosting a linked database and front end is essentially the
        bones of a small business, which is also pretty cool to think about. We
        can observe how successful products like those of AWS have become just
        by making connections easier to set up and maintain.
      </p>,
      <p>
        Fo medium to large businesses that need their teams atuned to business
        indicators, Tableau Server seems like a great option.
      </p>,
      <p>
        <b>Post in progress...</b>
      </p>,
    ],
  },
  {
    name: "make-electricity-better",
    title: "I can't stop thinking about the price of electricity",
    date: "August 15, 2021",
    author: "Walter Ogozaly",
    tags: ["recreational"],
    content: [
      <p>
        Earlier this summer, I got curious about how hard it would be to make
        flying carbon neutral. Flying is really convenient and has genuine use
        cases that other modes of transit, like high-speed rail, serve poorly.
        High-speed rail is great, but it's not how anyone gets from New York to
        San Francisco (nor should it be). The total distance of that trip is
        ~2400 miles. That's as far as Beijing to New Delhi or Lisbon to Moscow.
      </p>,
      <p>
        With possible exceptions for Canada and Australia, the United States is
        the only country to have its two largest economic regions (New York and
        California) so far apart from one another. China, India, Brazil, and the
        EU all have economic cores that are about the size of the eastern United
        States, but major cities are rarely more than 1200 miles from any other
        major city and any regions further off are less developed and populated.
        This difference is mainly attributable to the US's unique bicoastal
        nature: no other country straddles two oceans quite like we do.
        Connecting our two hub regions, then, is going to mean a lot of flying.
      </p>,
      <p>
        That lead me to a{" "}
        <a href="https://kleinmanenergy.upenn.edu/news-insights/decarbonizing-aviation-is-not-as-hard-as-we-think/">
          Kleinman Center for Energy Policy report
        </a>{" "}
        and an{" "}
        <a href="https://ourworldindata.org/co2-emissions-from-aviation">
          Our World in Data article
        </a>{" "}
        which outlined the challenges of making flight green:
      </p>,
      <>
        <p>
          - Aviation is currently responsible for 2.5% of global emissions but
          3.5% of warming. The disparity is due in large part to contrails
          (water vapor emissions), which have a heating effect on the atmoshere.
        </p>
        <p>
          - Much of the world is just becoming wealthy enough to fly and there
          will be ~3x the demand by 2050.
        </p>
        <p>
          - Batteries are way too heavy to do the job, at least for now. The
          battery planes that currently exist have frankly terrible capacity,
          speed, and{" "}
          <a href="https://www.bbc.com/future/article/20200617-the-largest-electric-plane-ever-to-fly">
            range
          </a>
          .
        </p>
      </>,
      <p>
        There are two technologies that have emerged as serious contenders for
        decarbonizing planes: hydrogen fuel and synthesized jet fuel. Both aim
        to achieve carbon neutrality without sacrificing fuel density, but
        neither is perfect. Both are uncompetitive due to the cost of
        electricity.
      </p>,
      <p>
        Hydrogen fuel releases only water when consumed, but it's a bear to
        store and transport. The larger barrier to competitiveness, however, is
        just how much electricity is required to make it.{" "}
        <a href="https://www.spglobal.com/platts/en/market-insights/latest-news/electric-power/112020-green-hydrogen-costs-need-to-fall-over-50-to-be-viable-sampp-global-ratings">
          The renewable energy powering the process is responsible for 60% of
          its cost.
        </a>
      </p>,
      <p>
        Synthesized jet fuel technically pollutes as much as any other jet fuel,
        but it's made differently: CO2 captured from the atmosphere is combined
        with hydrogen to produce a hydrocarbon fuel. The use of carbon-capture
        technology to obtain the CO2 for the fuel results in a 1:1 offset of
        emissions. Although it is carbon-neutral, it feels less "green" on its
        face, and sits less well with the climate left. It is quite compatible
        with the existing fleet of planes but it has the same crippling
        electricity costs as hydrogen.
      </p>,
      <p>
        Fuel is only{" "}
        <a href="https://www.investopedia.com/ask/answers/040715/what-are-major-expenses-affect-companies-airline-industry.asp#:~:text=Cost%20of%20Fuel%20for%20Airlines,it%20into%20a%20fixed%20expense.">
          10-12%
        </a>{" "}
        of an airline's operating expenses (and therefore your ticket price), so
        there's an argument to be made that the government should just step in
        already and either tax or subsidize so as to make renewable fuel the
        cheaper option. I think Republicans will control at least one branch of
        government for most of the next decade and block anything like this,
        leaving us to market forces, but your opinion may vary. If we <i>are</i>{" "}
        left to market forces, the amount of emissions reduction we achieve will
        largely be tethered to the cost of (renewable) electricity.
      </p>,
      <p>
        As I continued to read over the summer, I noticed more innovations that
        were ready to deploy and scale but for the cost of electricity. It seems
        there is plenty of innovation patiently lurking at a price point higher
        than the market can support, with electricity the chief culprit. The
        cost of desalination is{" "}
        <a href="https://www.technologyreview.com/2014/12/03/170231/how-can-desalination-become-cheaper/">
          driven by the high electrical demand of pushing water through a
          filter, aka reverse osmosis.
        </a>{" "}
        Steelmaking, responsible for 7-9% of human-made greenhouse gas emissions
        (with growing demand), could{" "}
        <a href="https://cen.acs.org/environment/green-chemistry/steel-hydrogen-low-co2-startups/99/i22">
          slash its emissions with cheap electricity and respectively lower
          hydrogen costs.
        </a>
      </p>,
      <p>
        <b>Promising reductions in the cost of renewable electricity</b>
      </p>,
      <p>
        There are reasons to be optimistic about the prospect of lowering
        electricity prices. The cost of wind power has been steadily falling,
        and the cost of solar photovoltaics has{" "}
        <a href="https://ourworldindata.org/cheap-renewables-growth">
          plummeted
        </a>
        . The other conventional renewables are struggling to come down in
        price.
      </p>,
      <p>
        Fusion could bring about a generational change in how we think about
        electricity, but the process can{" "}
        <a href="https://en.wikipedia.org/wiki/Fusion_energy_gain_factor">
          not yet produce more power than it requires.
        </a>{" "}
        I find it difficult to settle on an opinion of fusion's prospects over
        the next 20 years and resign myself to following the breadcrumbs of
        startups like <a href="https://tae.com/">TAE Technologies</a> in SoCal
        and <a href="https://cfs.energy/">Commonwealth Fusion</a> in Cambridge.
      </p>,
      <p>
        That's where I'll leave it for now. I'm sure energy costs influence many
        more sectors than the few I mentioned. The subject deserves a deeper
        treatment than I can give. Suffice to say it's fascinating to think and
        write about.
      </p>,
    ],
  },
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
