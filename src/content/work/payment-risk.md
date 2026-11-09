---
title: Reducing bad debt with risk-aware prepayment
summary: Combining real-time prepayment strategies with offline evaluation, forecasting, and monitoring to reduce bad debt while balancing payment protection and user experience.
tags: [Data science, Risk strategy, Forecasting, ROI]
draft: false
featured: true
---
## The challenge

Reducing unpaid journeys requires more than identifying payment risk. Intervening too broadly adds friction for legitimate passengers; intervening too narrowly leaves preventable losses uncovered.

## My contribution

At DiDi, I developed real-time prepayment strategies and predictive models, supported by an offline ROI framework, forecasts of the final bad-debt rate, and ongoing monitoring.

<figure class="impact-flow risk-flow" aria-labelledby="risk-flow-caption">
<div class="flow-branches risk-tracks">
<div class="flow-branch"><small>01 / Act in real time</small><strong>Prepayment strategy</strong><ul><li><b>Whitelist:</b> limit false positives and unnecessary intervention.</li><li><b>Blacklist:</b> broaden coverage of identified payment risk.</li><li><b>Prepayment decisions:</b> balance payment protection with passenger experience.</li></ul><span class="flow-benefit">Address risk before it becomes unpaid debt.</span></div>
<div class="flow-branch"><small>02 / Evaluate offline</small><strong>Evidence for better decisions</strong><ul><li><b>ROI framework:</b> evaluate whether interventions are worthwhile.</li><li><b>Forecasting:</b> predict the final bad-debt rate from earlier signals.</li><li><b>Monitoring:</b> track bad-debt, unpaid, and prepayment rates.</li></ul><span class="flow-benefit">Assess tradeoffs and surface changes earlier.</span></div>
</div>
<div class="risk-feedback">Monitoring and evaluation inform strategy refinement.</div>
<div class="flow-divider" aria-hidden="true">↓</div>
<div class="risk-outcome"><small>Business impact</small><strong>Reduce bad debt</strong><span>With payment protection and passenger experience considered together.</span></div>
<figcaption id="risk-flow-caption">A high-level view of the work; specific rules, features, and thresholds are omitted.</figcaption>
</figure>

## Why it matters

- **Lower bad debt:** real-time strategies and models supported earlier intervention on payment risk.
- **Explicit tradeoffs:** the ROI framework evaluated the value of intervention, with passenger experience considered alongside payment protection.
- **Earlier visibility:** forecasting provided a view of final bad debt before outcomes fully matured; monitoring tracked how performance changed.
