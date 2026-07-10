export const CATEGORIES = [
  { id: "all", label: "All Posts" },
  { id: "salesforce", label: "Salesforce" },
  { id: "nonprofit-tech", label: "Nonprofit Tech" },
  { id: "program-updates", label: "Program Updates" },
  { id: "career-advice", label: "Career Advice" },
];

export const blogPosts = [
  {
    id: "i-taught-myself-sql-because-nobody-else-was-going-to",
    title: "I Taught Myself SQL Because Nobody Else Was Going To",
    excerpt: "On craft supplies, a mortgage company backlog, and what it means to build something that outlasts you.",
    category: "career-advice",
    author: "Angela Landrith",
    date: "2026-07-05",
    readTime: "8 min read",
    image: null,
    content: `
      <p>In November of 1996, I answered a job listing and started work at a mortgage company scheduling appraisals across the country. It was my first real job out of college. I was sitting in a cube, making calls, processing paperwork, doing exactly what the role description said.</p>
      <p>And I kept looking at the piles.</p>
      <p>Everywhere I looked, there were physical files. Applications from appraisers who wanted to work with the company, stacked across desks and filling cubes, waiting to be processed through a review system that was entirely manual. Tracking was informal at best. Things got lost. Things got delayed. Nobody had a clear picture of where any given application was in the process at any given time.</p>
      <p>Nobody was going to fix it. That much was obvious. It wasn't in anyone's job description. It wasn't on anyone's roadmap. It was just the way things worked, and everyone had accepted that the piles were part of the landscape.</p>
      <p>I hadn't accepted it yet. And I had recently discovered Microsoft Access.</p>

      <h2>The craft supplies first</h2>
      <p>I want to tell you how I actually learned Access, because it matters for how I think about learning anything new.</p>
      <p>I didn't take a class. I didn't follow a tutorial. I found the tool, opened it up, and tried to build something I already completely understood: a catalog of my craft supplies.</p>
      <p>This sounds almost embarrassingly small. But that was the point. I wasn't trying to prove anything. I was trying to learn a tool without the pressure of it mattering. The craft supplies were a domain I knew completely — I knew every field I'd need, every relationship that made sense, every way I might want to query the data. The tool was the unknown variable. By making the subject matter trivially familiar, I could focus entirely on figuring out how the tool worked.</p>
      <p>It worked. I built the catalog. I understood what I'd done. I started thinking about what else I could build.</p>
      <p>The appraisal backlog was next.</p>
      <blockquote>The best way to learn a new tool is to use it on something you already understand completely. That way the tool is the only unknown. I learned this by accident with craft supplies in 1996. I've been doing it deliberately ever since.</blockquote>

      <h2>Nights, weekends, and overtime nobody asked for</h2>
      <p>I was salaried. That meant I could work as many hours as I decided to work, and in 1996 and 1997, companies weren't monitoring that the way they do now. So I stayed late. I came in on weekends. I worked at home in the evenings, figuring out how to take what I'd built for craft supplies and turn it into something that could handle hundreds of appraisal applications moving through a multi-step review process.</p>
      <p>Nobody asked me to do this. Nobody told me not to, either. I just saw something that needed to exist and decided to build it.</p>
      <p>There were problems — plenty of them. Things I hadn't anticipated. Edge cases I discovered only when something broke. Requirements I didn't know I had until a real user encountered a situation I hadn't designed for. I fixed them as they came up. The application got better. More people started using it. The piles stopped being the only system.</p>
      <p>I got paid exactly the same before and after.</p>
      <p>Eventually I left. I needed to be compensated for what I could actually do, and that conversation wasn't going anywhere at that company. So I moved on, and I assumed the Access database would be replaced or retired or quietly forgotten — the fate of most informal solutions built by people who weren't supposed to be building things.</p>

      <h2>Three years later</h2>
      <p>In 2001, I got a call.</p>
      <p>The company was building an enterprise system — a real one, properly resourced, built by the technology team. And they had a problem: they needed to understand what the existing appraisal management process required before they could build the replacement.</p>
      <p>The thing I had built informally, on my own time, in a tool I'd taught myself by cataloging craft supplies, had been running for three years after I left. It had become the process. And the technology team building the official system needed me — specifically me — to come back as a subject matter expert and document what I'd built so they could replicate it properly.</p>
      <p>I spent time with their team explaining requirements I had figured out intuitively in 1996 and 1997. The fields I'd chosen. The workflow I'd designed. The edge cases I'd solved along the way. Things I hadn't written down because I was the only one who needed to know them at the time.</p>
      <p>They turned my informal solution into the requirements document for the enterprise build.</p>
      <blockquote>I built something informally, on my own time, in a tool I taught myself. It ran for three years after I left. Then the enterprise technology team needed me to come back and explain it to them so they could build the official version. That's not a career success story. That's a story about being so far ahead of where your job title said you should be that the organization couldn't catch up until after you were gone.</blockquote>

      <h2>This is a different time and place</h2>
      <p>I want to be honest about something: the conditions that allowed this to happen don't exist the same way anymore.</p>
      <p>In 1996, at a mid-sized mortgage company, a salaried employee could stay late and build something unofficial without anyone noticing or caring. There was no IT governance process to approve what tools I used. There was no security review to clear what I put on the company network. Nobody was tracking what software I had installed on my machine. The organization was permeable in ways that organizations simply aren't today.</p>
      <p>I couldn't do what I did then in the same way now. The guardrails are higher, the oversight is real, and the tools are more powerful and therefore more scrutinized. That's not entirely wrong — there are legitimate reasons organizations have tightened up since the late 1990s. But something was also lost. The informal path from "I see a problem" to "I built something that solves it" has gotten much longer and much more bureaucratic.</p>
      <p>What replaced it, eventually, was low-code and no-code platforms. And now AI-assisted development. The tools have gotten more accessible even as the organizational permissions have tightened. The question for anyone with the builder instinct today is the same one I was navigating in 1997: how do you get the thing built when the official channels aren't designed for what you're trying to do?</p>
      <p>My answer, eventually, was to stop working within organizations that couldn't answer that question and build my own. But that took twenty-two more years of navigating the tension between seeing the problem and having the authority to fix it.</p>
      <p>The craft supplies catalog was the beginning of that twenty-two years. I just didn't know it yet.</p>
      <p><strong>— Angela</strong></p>
    `
  },
  {
    id: "i-get-why-gen-z-is-rejecting-ai",
    title: "I Get Why Gen Z Is Rejecting AI. I Also Think It Won't Work.",
    excerpt: "On a completely understandable response to a real threat — and why the strategy is the wrong one.",
    category: "career-advice",
    author: "Angela Landrith",
    date: "2026-06-28",
    readTime: "7 min read",
    image: null,
    content: `
      <p>Here's the tension I can't stop thinking about.</p>
      <p>A generation entered the workforce having done everything right — pursued degrees, built skills, followed the path they were told would work — and found themselves in a job market that had already started to shift underneath them. Now they're watching AI accelerate that shift in real time, and a significant number of them have decided that the right response is to reject it. To refuse to participate. To treat engagement with AI tools as a form of complicity in their own displacement.</p>
      <p>I understand that response completely. If I were 24 years old right now with a business degree or a marketing degree or even a computer science degree, watching corporations announce layoffs in the same press releases where they announce AI investments, I would feel the same way. The fear is legitimate. The anger is legitimate. The sense that something is being taken is legitimate.</p>
      <p>The strategy, though, is not going to work. And I say that with full empathy for the position, not contempt for it.</p>
      <blockquote>The feeling is right. The strategy is wrong. And confusing those two things is going to cost people who can least afford it.</blockquote>

      <h2>We've been here before</h2>
      <p>In the mid-1990s, the internet arrived in corporate America. Not as a concept — as a daily operational reality that rewrote how businesses communicated, sold, distributed information, and hired people. Entire job categories disappeared. Entire industries restructured. People who had built careers on skills that the internet made obsolete had to figure out what to do next.</p>
      <p>Some of them rejected it. They waited for it to stabilize, or hoped their industry would be different, or decided the disruption was overstated. Most of them eventually had to adapt anyway, just from a worse starting position than the people who had been learning the new tools for two or three years already.</p>
      <p>Some of them leaned in early and built entirely new careers on the foundation of understanding what most of their peers didn't yet. Those people did disproportionately well.</p>
      <p>I watched this happen from inside corporate banking and financial services. I was one of the people who leaned in early — not because I had a master plan, but because I was curious about what the tools could do and I had problems that needed solving. That instinct, repeated across twenty-two years and multiple technology waves, is the reason I was still relevant when each new wave arrived.</p>
      <p>AI is not the same as the internet. It's bigger, it's faster, and the displacement is more broadly distributed across skill levels. But the dynamic is identical: a technology arrives, it changes what work looks like, and the people who figure out how to use it intelligently end up with more options than the people who don't.</p>

      <h2>The money has already been spent</h2>
      <p>Here's the part that I think gets lost in the conversation about whether AI is good or bad for workers: the corporate investment decision has already been made. Billions of dollars, at hundreds of companies, in AI infrastructure, tooling, and integration. That money doesn't come back out. The organizations that have committed to AI-assisted workflows are not going to un-commit because a portion of the workforce is uncomfortable with the transition.</p>
      <p>This is not an argument that the corporate decision was right. It's an argument about the reality that exists independent of whether it was right. The internet didn't reverse course because it disrupted journalism. Social media didn't reverse course because it disrupted political discourse in ways nobody fully understood. These technologies landed, they changed things permanently, and the question that followed was never "should this exist" — it was always "how do we navigate what exists."</p>
      <p>AI is going to be navigated the same way. By people who decided to understand it well enough to use it intelligently, and by people who didn't. I know which group I'd rather be in.</p>
      <blockquote>The question was never "should this exist." It was always "how do we navigate what exists." The internet didn't wait for consensus. Neither will this.</blockquote>

      <h2>Just because you can doesn't mean you should</h2>
      <p>There is a version of the pro-AI argument that I find just as unhelpful as the rejection of it, and it goes like this: automate everything you can, remove humans from every process where a machine can do the work, optimize without limit.</p>
      <p>I think that's wrong. Not just ethically — strategically wrong.</p>
      <p>The organizations I've watched get the most out of technology — Salesforce implementations, AI-assisted workflows, any kind of automation — are the ones that were deliberate about where humans stayed in the loop. Not because they were sentimental about it. Because they understood that certain kinds of judgment, accountability, and context don't transfer to a system. The places where automation fails, consistently, are the places where someone decided the human variable was optional and found out later that it wasn't.</p>
      <p>Just because you can remove a human from a process doesn't mean you should. That's not a resistance to technology. It's a design principle. The question isn't whether to use AI. The question is where humans belong in an AI-assisted world — and that question requires humans who understand the technology well enough to answer it intelligently.</p>

      <h2>The skill you actually need</h2>
      <p>The most valuable thing you can do right now, if you're early in your career and worried about what AI means for your future, is not to reject these tools. It's to understand them well enough to know what they can do, what they can't do, and where your judgment is irreplaceable.</p>
      <p>That's a learnable skill. It's also a skill that compounds. The people who are building it now — who are working with AI tools seriously, critically, with an understanding of their limits as well as their capabilities — are going to be significantly better positioned in three years than the people who spent those three years waiting for the disruption to pass.</p>
      <p>The disruption is not going to pass. But it is going to change the way companies do business. It always does. Every major technology wave in my career has sorted people into roughly the same two groups: the ones who figured out how to use the new thing intelligently, and the ones who didn't. The first group didn't necessarily love the technology or think it was an unqualified good. They just decided that understanding it was better than not understanding it.</p>
      <blockquote>You don't have to believe AI is good for workers to decide that understanding it is better than not understanding it. Those are different questions. One is about values. The other is about strategy. You can hold both at the same time.</blockquote>
      <p>And keep humans in the loop where it matters.</p>
      <p><strong>— Angela</strong></p>
    `
  },
  {
    id: "i-bet-the-house-literally",
    title: "I Bet the House. Literally.",
    excerpt: "On a 100-year-old house, a nonprofit without a safety net, and what it actually means to bet on yourself when you know exactly what you're getting into.",
    category: "career-advice",
    author: "Angela Landrith",
    date: "2026-06-22",
    readTime: "8 min read",
    image: null,
    content: `
      <p>Eighteen months ago I made two bets at the same time.</p>
      <p>The first was on a house. The second was on myself. They happened to coincide, and I've been thinking ever since about whether that was a coincidence or whether they were always the same decision wearing different clothes.</p>
      <p>The house is in Oak Cliff, Dallas. I bought it alone in 2005, after a divorce, because I was living in an apartment and making choices about what I actually wanted my life to look like. Suburbs didn't feel right. I grew up in Alaska, lived in a lot of places, never stayed more than two years anywhere. I read that Oak Cliff was up and coming. I loved old houses. So I bought one — a craftsman built in 1926, beautiful bones, and a renovation project I did not fully understand when I signed the paperwork.</p>
      <p>My husband came into the picture the following year. We married in 2006, and he has been part of this house's story ever since, which is fortunate because he is skilled at exactly the things a 100-year-old house demands. For years we managed. We fixed things as they broke. We kept it livable and loved.</p>
      <p>And then, eighteen months ago, managing stopped being enough. The house had accumulated so many deferred problems that it had essentially stopped functioning as a home. Plumbing that had been patched too many times. Electrical systems from three different decades. A layout that reflected every owner's life except ours. We were looking at end-to-end renovation — nothing could go back in until the right foundations were in place.</p>
      <p>The house turns 100 this year. We're nearing the end of the biggest renovation it's ever had.</p>

      <h2>The second bet</h2>
      <p>At almost exactly the same time I was deciding to do the full renovation, I was also deciding to leave.</p>
      <p>I'd spent twenty-two years in corporate environments — mortgage, financial services, technology — doing product management work that I was genuinely good at and that, I finally had to admit, was not going to get me anywhere I actually wanted to go. I had taken the work as far as it would take me. I wasn't going to build what I wanted to build inside someone else's organization. I helped found Transition Trails three years earlier and had been running it alongside a full-time job, and I understood, sitting with that renovation estimate, that I was going to have to choose.</p>
      <p>So I chose. I left corporate eighteen months ago to commit to Transition Trails full-time. No salary backstop. No safety net. A nonprofit I co-founded with people who believed in the model enough to build it with me, funded by conviction and early momentum and a belief that the problem we're solving is real and the approach we're taking is right.</p>
      <p>I hope it works. I'm not certain it will. That's what makes it a bet.</p>
      <blockquote>The first bet — the house in 2005 — I made without fully understanding what I was getting into. The second bet I made with complete clarity about the stakes. I'm not sure which kind is harder. I think the second kind is. When you can see exactly what you're risking, choosing to risk it anyway is a different kind of courage.</blockquote>

      <h2>What the house keeps teaching me</h2>
      <p>Here's what I keep thinking about while we're in the middle of this renovation: every layer we pull back is a record of someone else's decision. Electrical work from three different decades. Plumbing that was clever in 1958 and baffling now. A wall that made sense for the family who added it and makes no sense for us. You don't inherit a house. You inherit everyone who lived in it — their priorities, their shortcuts, their solutions to problems you'll never fully understand because you weren't there when they made them.</p>
      <p>I have had this exact experience with software for my entire career.</p>
      <p>Legacy Salesforce orgs are the same archaeology project. Pull back one layer and you find the decisions of every admin who came before you — the configurations that made sense in 2015, the automations nobody documented, the field named something wrong because it was repurposed three times and nobody updated the label. You don't inherit the system. You inherit the thinking. Sometimes the thinking was brilliant. Sometimes it's been holding something up that nobody remembered to label as load-bearing.</p>
      <p>My husband can look at a wall and know whether it's structural before we open it. I spent two decades developing the equivalent ability in enterprise technology: reading a system well enough to understand which things you can change safely and which things will bring the ceiling down if you touch them. The tools are different. The skill is the same.</p>
      <blockquote>A legacy system — whether it's a house or a Salesforce org — is a record of every decision made by every person who touched it, including the ones who didn't document anything. You don't inherit the software. You inherit the thinking.</blockquote>

      <h2>What I'm building now</h2>
      <p>Transition Trails exists to close the experience gap in the Salesforce ecosystem — the gap between earning a certification and actually getting hired, which turns out to be enormous and almost entirely unaddressed. We do it by connecting aspiring Salesforce professionals with real nonprofit client work, supervised by experienced practitioners, so that learners build portfolios and nonprofits build systems and both sides come out ahead. That's the model. We're proving it works.</p>
      <p>I'm also building something else, using AI tools that didn't exist in any practical form until recently, in ways I'm still figuring out as I go. I'll write more about that in the weeks ahead — not the polished version of what it looks like, but the actual process of someone who has twenty-two years of knowing what good systems require, using new tools to build faster than she ever could before, and learning in real time what those tools give you and what they absolutely cannot replace.</p>
      <p>That's what this newsletter is. Two bets, both in progress, neither one finished. A house that turns 100 this year and is finally getting the renovation it deserves. A nonprofit that is three years old and just got its founder's full attention. And a lot of writing about what it feels like to be in the middle of something before you know how it ends.</p>
      <p>The cofounders who are building this with me knew what they were signing up for. The learners and nonprofits who trust us with their work know what they're signing up for. I know what I signed up for.</p>
      <p>I hope it works. I'm betting the house that it will.</p>
      <p><strong>— Angela</strong></p>
    `
  },
  {
    id: "this-is-for-you-if",
    title: "This Is for You If\u2026",
    excerpt: "There's a point where clarity isn't the problem anymore. You understand the gap. You see the path. You know what real experience looks like. But a different question starts to show up.",
    category: "program-updates",
    author: "Angela Landrith",
    date: "2026-06-14",
    readTime: "5 min read",
    image: null,
    content: `
      <p>There's a point where clarity isn't the problem anymore.</p>
      <p>You understand the gap. You see the path. You know what real experience looks like.</p>
      <p>But a different question starts to show up:</p>
      <p><strong>"Is this actually the right next step for me?"</strong></p>
      <p>That's a better question.</p>
      <p>Because not every path is meant for everyone. And this one, especially, is designed a certain way.</p>

      <h2>Who this is for</h2>
      <p>This is for you if:</p>
      <ul>
        <li>You passed the certification\u2026 and then everything went quiet</li>
        <li>You've realized more courses aren't going to fix this</li>
        <li>You want to work on something that actually matters — not another sandbox exercise</li>
        <li>You're ready to make decisions\u2026 even when you're not completely sure</li>
        <li>You're open to feedback, even when it's uncomfortable</li>
        <li>You want to build something you can actually show</li>
      </ul>
      <p>You don't need to be perfect. You don't need years of experience. But you do need to be ready to do the work.</p>

      <h2>Who this is not for (yet)</h2>
      <p>This might not be the right step right now if:</p>
      <ul>
        <li>You're still working toward your first certification</li>
        <li>You're looking for step-by-step instruction on everything</li>
        <li>You want something you can complete passively</li>
        <li>You're not able to commit consistent time each week</li>
        <li>You're not ready to have your thinking challenged</li>
      </ul>
      <p>And that's not a judgment. It just means your next step is somewhere else — for now.</p>

      <h2>Why we're starting small</h2>
      <p>There's a reason we're not opening this up to everyone at once.</p>
      <p>Because real experience breaks when you try to scale it too fast. It requires real problems, real feedback, and real support. And that only works when the group is small enough to guide properly.</p>
      <p>So instead of trying to grow fast, we're focused on getting this right.</p>

      <h2>What this actually requires</h2>
      <p>This isn't about watching more content. It's about showing up — consistently, thoughtfully, willing to try, adjust, and try again.</p>
      <p>Some weeks will feel clear. Some won't. That's part of it.</p>
      <p>Because the goal isn't just to learn something new. It's to build confidence that holds up when things aren't clear.</p>

      <h2>Where we are right now</h2>
      <p>We're building the first Guided Trail cohort. Not hypothetically. Not eventually. Right now.</p>
      <p>We're starting small, intentionally — and we'll grow deliberately from there. Because this only works if we can actually support the people in it.</p>

      <h2>If you've been reading this thinking, "This is exactly where I am\u2026"</h2>
      <p>There's usually a moment when something clicks. Not perfectly. But clearly enough. Where you think: <strong>"This is exactly where I am."</strong></p>
      <p>If you're feeling that, you don't need to overthink it. Just take the next step. This is where you stop wondering if you're ready — and start building proof that you are.</p>
      <p><strong>— Angela</strong><br/>Real Experience. Real Impact. On the Trail.</p>
    `
  }
];
