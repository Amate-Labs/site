---
title: "Under construction, coming soon!"
description: "A placeholder post while the lab gets set up."
pubDate: 2026-11-23
draft: false
---

The lab is still setting up. This post is a placeholder, and it doubles as a check that the blog renders code, math, and diagrams.

```python
def train_step(model, batch, optimizer):
    loss = model.loss(batch)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    return loss.item()
```

```mermaid
flowchart LR
  A[Dataset] --> B[Fine-tune]
  B --> C[Evaluate]
  C --> D[Publish]
```

More soon.
