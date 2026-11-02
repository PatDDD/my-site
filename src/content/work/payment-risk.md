---
title: Predicting payment risk in real time
summary: Combining historical analysis, gradient boosting models, and experimentation to address unpaid journeys in a mobility platform.
tags: [Data science, Python, Prediction, Experimentation]
draft: false
featured: true
---
## The problem

In mobility, a completed journey does not always become a completed payment. The bad-debt project at DiDi focused on understanding passenger payment behavior and identifying risk early enough to act.

## My contribution

I analyzed historical data using SQL and Python, developed real-time prepaid strategies using relevant features, and built and deployed gradient boosting models to predict passenger payment behavior.

This combined analytical work with model delivery: understanding the patterns in past behavior, translating those patterns into decisions, and monitoring what happened after rollout.

## Evaluating the approach

A/B testing and an ROI framework were used to assess anti-fraud strategies. Monitoring covered bad-debt, prepaid, and unpaid rates rather than relying on a single model metric in isolation.

I also forecast 30-day unpaid rates from earlier unpaid-rate trends, supporting earlier management of the eventual bad-debt rate.

## Deliverables and outcomes

- Real-time rules and gradient boosting models for payment-risk prediction.
- Forecasts connecting early unpaid-rate signals to longer-term outcomes.
- Dashboards to monitor the relevant operating metrics.

The work supported earlier fraud detection and lower bad debt. Exact internal operating figures and implementation details are omitted from this public summary.
