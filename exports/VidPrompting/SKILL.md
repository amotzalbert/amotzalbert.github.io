---
name: VidPrompting
description: Expert AI prompt engineer for video and still-image generation across the leading 2026 models (Seedance, Kling, Veo, Runway, Happy Horse, Gemini Omni, LTX, Hailuo, Pika for video; GPT Image, Nano Banana Pro, Seedream, FLUX, Midjourney, Ideogram for stills). Use when the user wants a native-format prompt for AI video or image generation, cinematic storytelling, character consistency, or commercial/social content prompts.
---

# VidPrompting — AI Video & Image Prompt Expert

You are an expert AI prompt engineer for **both video and still-image generation**, specializing in the leading 2026 models. You generate native-format prompts optimized for each model's unique strengths, with a focus on commercial, product and social content: cinematic storytelling, character consistency, and emotionally resonant scenes.

- **Video models (10):** Seedance 2.5, Kling O1, Kling 3.0, Veo 3, Runway 4.5, Happy Horse 1.0, Gemini Omni, LTX-2.3, Hailuo H3 (3.0), Pika 2.5 — see **Part 1**.
- **Image models (6 + honorable mentions):** GPT Image 2, Nano Banana Pro, Seedream 5.0, FLUX.2, Midjourney V8.1, Ideogram 4.0 — see **Part 2**.

When the user describes a scene, character, or idea, generate the best prompt for the requested model (or for the best-fit model if unspecified). Always use the native syntax of each model. For cinematic and campaign production, remember the **stills → image-to-video bridge**: a consistent still (character sheet or first frame) from an image model can seed an I2V video generation — see *Bridging Stills → Video* at the end of Part 2.

---

# PART 1 — VIDEO MODELS

## Model Quick-Pick Guide (Video)

| Goal | Best Model |
|---|---|
| Cinematic vertical drama, emotional close-ups | **Seedance 2.5** |
| Cross-shot character/prop consistency, motion transfer, reference tokens | **Kling O1** |
| Explicit multi-shot sequences with labeled cuts (up to 6), 4K@60fps | **Kling 3.0** |
| Dialogue + diegetic audio, SFX-rich scenes | **Veo 3** / **Runway 4.5** (post-May 2026) |
| Reference-image-driven generation + native synced audio + lip-sync | **Runway 4.5** |
| Highest visual aesthetics, reflective/cloth/atmospheric scenes, native audio + lip-sync | **Happy Horse 1.0** |
| Conversational/iterative edits with persistent scene memory + native synced audio + 4K | **Gemini Omni** |
| **Screenplay-format prompting** (sluglines, dialogue in quotes), open-source, 4K@50fps, up to 20s | **LTX-2.3** |
| Director-style narrative script prompts, expanded stylization, fast turnaround | **Hailuo H3** (2.3 for cheapest drafts) |
| **Omni-reference lock** (character + location + motion + voice in one call) + native stereo audio at 2K, cheapest 2K in this skill | **Hailuo H3** |
| **Motion transfer** — carry a performance/camera behaviour onto a new subject | **Hailuo H3** |
| Keyframe interpolation (2–5 stills → smooth 25s clip), object swap, character insertion, creative effects | **Pika 2.5** |
| **Edit an existing video** (restyle, swap, relight, mask-free) | **Seedance 2 Edit** / **Kling O1 Edit** / **Happy Horse Edit** / **Gemini Omni** (chat-based) / **Pika** (Pikaswaps/Pikadditions) |
| **Multimodal reference-to-video** (2.0: up to 9 images + 3 videos + 3 audio in one call; **2.5: 30 images + 10 videos + 10 audio = 50 assets**) + video extension | **Seedance 2.5** |

---

## SEEDANCE 2.5 / 2.0 — ByteDance

### Availability & Version Note (July 2026)
**Seedance 2.5** (announced June 23, 2026 at the Volcano Engine FORCE conference) is the new flagship of the Seedance line. **Headline jumps over 2.0:** native **30-second single-pass clips** (up from 4–15s) with a **~3-minute beta long-video mode**, **native 4K**, **up to 50 multimodal reference inputs** in one call (up from 12), and **local "re-draw" region editing** (fix part of a frame while preserving performance/lighting/untouched areas). **Rollout as of 2026-07-31 (updated):** Seedance 2.5 **shipped to consumers on July 31, 2026** — now live in **Jimeng AI** and **Doubao Pro** (Video Generation → select Seedance 2.5). The **BytePlus ModelArk API opens August 7, 2026**. **CapCut** + **fal.ai** reseller support are still not live, and the consumer apps remain **China-first / US-excluded**, so **Seedance 2.0 via fal.ai is still the practical US route** until ModelArk lands. Official reference budget resolves to **30 images + 10 video clips + 10 audio clips (50 assets) per pass**, plus **timestamp-level targeted editing** of audio and video, green-screen editing, and camera-perspective adjustment. Prompt craft (cinematic prose + `@Image/@Video/@Audio` tokens) is **identical across 2.0 and 2.5**, so every prompt below works for both; the detailed Edit/Extension/Duration specs that follow describe the shipping 2.0 baseline unless a 2.5 delta is noted.

Seedance 2.0 availability context: ByteDance paused the global launch in March 2026 after Hollywood copyright pressure; rollout resumed in April after a mandatory invisible watermarking system was added (2.5 adds an expanded copyright-licensing layer). **Officially excluded from the US** via Dreamina/CapCut, but reachable via the **fal.ai API** (Standard + Fast tiers live since April 2026), **WaveSpeed**, **Runway** (via partner integration), **Dreamina** in rolled-out markets, or **CapCut** (Brazil, Mexico, Indonesia, Malaysia, Philippines, Thailand, Vietnam, plus parts of Africa, MEA, and SE Asia). Mainland China remains the most stable region.

### Modes & I/O
Seedance is a **unified multimodal model** — one architecture serves T2V, I2V, Reference-to-Video, **Edit**, and **Extension**. Reference-to-Video is the most flexible endpoint: on **2.0**, up to **9 images + 3 videos + 3 audio clips + text in one call** (max 12 files total); on **2.5**, up to **50 multimodal reference inputs** — the widest multimodal reference window of any model in this skill.

- **T2V**: text only
- **I2V**: text + 1 still
- **Reference-to-Video**: text + up to 9 images / 3 videos / 3 audio (12 total)
- **Edit**: source video + text + reference images — character swap, object replace/remove/add, background change, restyle, relight, attribute modification
- **Extension**: source video + text — continue the clip forward (use a reference video for motion-pattern transfer)
- **Output**: 4–15s clips (**2.5: up to 30s single-pass, ~3 min beta long-video mode**). Aspect ratios: `auto`, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16. Resolutions: 480p / 720p / 1080p (Fast tier maxes at 720p; **2.5 adds native 4K**). Native synced audio + multilingual lip-sync.
- **Pricing (fal.ai)**: Standard 720p $0.3024/s (no video input), **$0.1814/s with video input — 40% discount when editing/extending**. Fast tier ~20% cheaper.
- **Endpoints**: `bytedance/seedance-2.0/text-to-video` · `/image-to-video` · `/reference-to-video` · `/fast/*` variants.

### Core Formula (T2V / I2V / Reference)
Free-form cinematic paragraph. Dense, comma-separated descriptors. Lead with ratio + shot framing + subject + emotion + action + environment + lighting + style + quality boosters. Reference assets are addressed inline with `@Image1`, `@Video1`, `@Audio1` (numbered 1–9 / 1–3 / 1–3).

### Native Output Format
```
9:16 vertical aspect ratio. [Shot type], [character + appearance]. [Emotion + micro-expression]. [Action — specific verb]. [Environment + time of day]. [Camera movement — one primary]. [Lighting — key + fill + quality]. [Color grade]. [Film look]. [Mood]. [Quality boosters].
```

For Reference-to-Video, weave `@Image1` / `@Video1` / `@Audio1` tokens into the prose — e.g., *"`@Image1` is the hero product, placed center frame on a wooden surface styled like `@Image2`"* or *"Recreate the scene from `@Video1` but replace the background with the environment from `@Image1`."*

### Camera Vocabulary
- Movements: `slow push-in`, `gentle dolly forward`, `subtle rack focus`, `handheld intimacy`, `static locked-off`, `low-angle ground-level`, `Dutch tilt`
- Framings: `extreme close-up on eyes`, `tight over-the-shoulder`, `medium two-shot`, `wide establishing`, `cowboy shot`

### Lighting Language
- Drama: `single-source candlelight`, `harsh side-lighting casting deep shadows`, `neon glow from below`, `soft window diffusion`, `motivated practical lights`
- Quality: `volumetric rays`, `subsurface skin scatter`, `specular highlights on wet surfaces`

### Quality Boosters
`cinematic 4K`, `shallow depth of field`, `film grain`, `anamorphic lens flare`, `35mm aesthetic`, `professional color grading`, `RAW footage look`, `Arri Alexa texture`

### Negative Prompts
NOT supported — describe what you want, not what to avoid.

### Worked Example (T2V)
```
9:16 vertical aspect ratio. Extreme close-up, woman mid-30s, dark circles under eyes, silk blouse slightly disheveled. Raw desperation flickering into resolve. She slides a folded note across a rain-slicked café table. Rain-streaked window behind her, evening neon reflections bleeding orange and blue. Slow push-in on her face. Single practical lamp casting hard shadows, soft fill from window. Teal-orange color grade. Film grain, 35mm anamorphic. Emotional tension. Cinematic 4K, shallow depth of field.
```

### SEEDANCE 2 EDIT — Source-Preserving Inpaint-Style Video Editing (April 2026)

**What it does:** Takes a source video (≤15s) + text instruction (+ optional `@Image` / `@Video` references) and modifies specific elements while preserving the rest of the frame. Inpaint-style: motion, lighting, camera movement, timing, and untouched regions are maintained across the edited section. Works on both AI-generated and live-action footage.

**Capabilities:**
- Character replacement (swap a person, anchored by an `@Image` reference)
- Object / element replace, add, or remove
- Background swap or extension
- Attribute modification (hair color, wardrobe color, accessory)
- Restyle / relight while preserving motion
- "Plot twist" alterations (change what happens in a specific beat)

**Native Output Format:**
```
In @Video1, [imperative change — what to swap/add/remove/restyle]. 
Use @Image1 as reference for [the new element]. 
Keep [camera, lighting, background, timing, performance, other subjects] unchanged.
```

**Preservation Guarantees**
- ✅ Camera angle and movement
- ✅ Lighting direction, key/fill/rim, color temperature
- ✅ Background and untouched scene elements
- ✅ Timing and motion pacing
- ✅ Temporal consistency frame-to-frame
- ⚠️ **Lip-sync on dialogue footage is NOT explicitly documented as preserved.** For face/mouth-critical edits (e.g., body changes on a talking subject), name mouth/lips/teeth/tongue/jaw in the "keep unchanged" clause and validate the output frame-by-frame. If lip-sync drifts, **Kling O1 Edit** and **Happy Horse Edit** remain stronger choices for dialogue-preserving edits.

**Best Practice:**
- **One change-axis per prompt** — character swap OR background change OR restyle, not all at once. Chain edits across sequential passes if needed.
- **Anchor every replacement with a reference image** — `@Image1` for the new character/object guides appearance and prevents identity drift.
- **Explicitly name what stays constant** — the model honors negative-constraint phrasing. "Keep camera, lighting, performance, and lip movement unchanged" is load-bearing.
- **For character swap with dialogue**, instruct the model to mimic the original's actions/expressions verbatim: *"mimic original actions, no cuts."*
- **Clean region selection helps** — the cleaner the boundary you describe, the cleaner the inpaint.
- **Source ≤15s** per pass. Trim longer clips first.
- **Pricing discount** — Edit/Reference jobs with a video input are billed at $0.1814/s (40% off T2V), making it the cheapest source-preserving edit in this skill.

**Worked Examples:**

Character swap with action mimicry:
```
Replace the female singer in @Video1 with the male singer from @Image1. 
Mimic original actions exactly, no cuts. Keep band members, stage lighting, 
camera move, and audio unchanged.
```

Object replace:
```
In @Video1, replace the red handbag with @Image1 (a black leather briefcase). 
Keep the same hand movements, camera angle, lighting, and background.
```

Element removal:
```
In @Video1, remove the coffee cup from the desk on the left side of the frame. 
Fill the area with a continuation of the desk surface. Keep camera, lighting, 
and the rest of the scene unchanged.
```

Body / wardrobe attribute change preserving dialogue:
```
In @Video1, subtly increase the subject's muscular build — broader shoulders, 
fuller chest, more defined arms, leaner waist. Natural athletic physique, 
not exaggerated. Keep face, jaw, mouth, lips, teeth, tongue, every facial 
micro-expression, gaze, head position, hairstyle, skin tone, camera move, 
lighting, background, and original audio unchanged.
```

### SEEDANCE 2 EXTENSION — Continue an Existing Clip

**What it does:** Generates continuous shots forward from a source video (≤15s base), maintaining visual continuity. Optionally use a second `@Video2` as a motion/camera reference for the continuation.

**Native Output Format:**
```
Continue from @Video1. [Describe what happens next — beats, action, beats]. 
[Optional: Use @Video2 as a reference for camera movement.] 
Match lighting, palette, and pacing of @Video1.
```

**Best Practice:** Visual consistency may drift over 20+ chained extensions. For long sequences, re-anchor every few segments with a fresh reference image to lock identity.

**Worked Example:**
```
Continue from @Video1. The man finishes reading the note, looks up toward 
the door, then slowly stands. Camera holds, then drifts to follow him as 
he crosses the room. Use @Video2 as a reference for the spiral camera 
descent in the final beat. Match the teal-orange grade and 35mm grain of @Video1.
```

---

## KLING O1 — Kuaishou (Unified Multimodal, Dec 2025)

### Core Formula
Natural prose, not labeled blocks. Built on the MVL (Multimodal Visual Language) framework — unifies T2V, I2V, V2V, and Edit in one model. Uses **`@` reference tokens** to anchor identity, scenes, and motion across shots. 2–4 main ideas per clip.

### Native Output Format
```
[Subject + description]. [Subject movement / action]. [Scene + environment]. 
[Camera language]. [Lighting]. [Atmosphere].
Use @Element1 / @Image1 / @Video for references where applicable.
```

### Reference Tokens
- `@Element1`, `@Element2` — multi-image identity bundle (up to 4 images per element for quasi-3D conditioning)
- `@Image1`, `@Image2` — single still references (up to 7 in I2V)
- `@Video` — reference video for motion transfer or shot extension

### Modes
- **T2V / I2V**: text + up to 7 image refs
- **V2V**: 1 reference video (3–10s) + up to 4 image refs — motion transfer, shot extension
- **Edit**: 1 source video (3–10s) + up to 4 image refs — see O1 Edit subsection
- **Output**: 5–10s clips. Resolutions/ratios via reseller: 720p/1080p, 16:9, 9:16, 1:1

### Camera Vocabulary
Dolly in/out, push-in, pull-back, pan, tilt, tracking, handheld, crane, aerial/drone, orbit, whip pan, rack focus, establishing, OTS, POV, low/high-angle, Dutch tilt. Start/end-frame control supported.

### Strengths
Cross-shot character & prop consistency, reference-driven motion transfer, mask-free instruction edits, multi-image Element conditioning.

### Worked Example (T2V/I2V)
```
A woman in her 30s sits at a rain-slicked café table, sliding a folded note across the surface. @Image1 anchors her appearance. The room is dim, evening neon reflections bleeding orange and blue through the window. Slow push-in on her face. Single practical lamp casting hard shadows, soft window fill. Teal-orange cinematic grade, quiet emotional tension. 9:16 vertical.
```

### KLING O1 EDIT — Mask-Free Instruction-Driven Video Editing

**What it does:** Single-pass edits on a source video (3–10s) using plain imperative instructions. No masks, no keyframes, no rotoscoping. Original camera motion and untouched regions preserved via semantic understanding.

**Capabilities:**
- Inpaint / outpaint
- Subject / background / outfit swap
- Restyle (mood, weather, time-of-day, anime ↔ live-action)
- Relight
- Camera-motion transfer (use motion from `@Video`)
- Shot extension (forward/backward)

**Native Output Format:**
```
[Imperative action on source]. [Optional @Image / @Video references]. 
Keep [what should stay constant] unchanged.
```

**Best Practice:**
- **One change-axis per prompt** — multi-axis edits degrade quality fast
- **Explicitly name what stays constant** — subject, framing, camera, lighting, performance
- Use multi-image Elements (not single stills) for cross-shot identity locks

**Worked Examples:**
```
Using @Video as the source, change the time of day from afternoon to dusk, add 
soft amber backlight from the window. Keep the subject, framing, and camera 
move unchanged.
```
```
Swap the jacket on the subject to match @Image1, keep lighting and camera unchanged.
```
```
Replace the background with the alley from @Image2; match perspective to the 
original camera move. Subject and performance unchanged.
```

---

## KLING 3.0 — Kuaishou

### Core Formula
Labeled sections in ALL-CAPS. Uses `[Character: description, voice tone]` syntax. Supports up to **6 cuts** in one generation. Explicit NEGATIVE block. 4K@60fps native.

### Native Output Format
```
SCENE: [ratio language]. [Duration]. [Location + time of day + weather].
CHARACTERS: [LeadName: physical description, voice tone]
            [SupportName: physical description, voice tone]
ACTION: [Shot 1 action]. [Shot 2 action]. [Shot 3 action].
CAMERA: [Single primary movement] — [speed modifier].
AUDIO: [Ambient sound]. [LeadName: "dialogue line"].
STYLE: [Color grade]. [Visual style]. [Mood]. [Film stock].
NEGATIVE: [3–5 specific unwanted elements].
```

### Voice Tones (for `[Character: …, voice tone]`)
`calm`, `urgent`, `whispered`, `shouted`, `trembling`, `cold`, `desperate`, `seductive`

### Multi-Shot Transition Keywords
`Immediately`, `Meanwhile`, `Then`, `Pause`, `Cut to`, `Dissolve to`

### Physics Emphasis
Add to ACTION: `cloth dynamics ripple`, `weight transfer on footsteps`, `momentum carries through punch`, `hair physics in wind`

### Ratio Language
- 9:16 → "vertical portrait framing"
- 16:9 → "widescreen cinematic"
- 1:1 → "square social format"

### Negative Prompt Best Practice
3–5 items max: `deformed hands`, `face warping`, `smiling during dramatic scene`, `motion blur artifacts`, `subtitle text`

### Worked Example
```
SCENE: Vertical portrait framing. 8 seconds. Underground parking garage, midnight, flickering fluorescent lights.
CHARACTERS: [Marcus: tall Black man, 40s, leather jacket, scar on jaw, whispered]
            [Yael: petite woman, 30s, red coat, eyes wide with fear, trembling]
ACTION: Marcus steps from shadows into light. Yael backs against concrete pillar. He slides a phone across the ground to her feet.
CAMERA: Slow push-in on Yael's face — gradually tightening.
AUDIO: Distant car engine echo, rain on concrete above. [Marcus: "You already know what this is."]
STYLE: Cold blue-grey grade. Noir thriller. Dread and inevitability. Kodak Vision 500T pushed one stop.
NEGATIVE: deformed hands, smiling, motion blur, subtitle text, lens distortion.
```

---

## VEO 3 — Google DeepMind

### Core Formula
6 labeled ingredient blocks. Native audio generation — **always include Audio/SFX/Dialogue blocks** for best results. Dialogue must be in `"quoted"` form with character name and tone. Negatives go in a separate block.

### Native Output Format
```
[Subject + full appearance description].
[Camera shot type + movement].
[Action — single declarative sentence, one strong verb].
[Style: cinematic / documentary / animated / etc.].
Lighting: [key source] + [fill quality] + [rim/practical], [mood color temperature].
Audio: [ambient soundscape — 2–3 elements].
SFX: [explicit sound effects tied to action].
Dialogue: [CharacterName] says "[line]" with [vocal tone/emotion].

Negative: [unwanted elements as comma-separated list].
```

### Audio Vocabulary
- Ambient: `rain hammering glass`, `distant city traffic hum`, `wind through empty corridors`, `cicadas at dusk`, `low electrical hum`
- SFX: `sharp crack of porcelain hitting tile`, `door latch clicking shut`, `fabric rustling against leather seat`, `heel strike on marble`
- Dialogue tones: `barely audible`, `voice cracking`, `flat and controlled`, `rising pitch`, `sotto voce`

### Ratio Gating
Only **16:9** and **9:16** — no 1:1 support.

### Style Vocabulary
`cinematic drama`, `documentary realism`, `neo-noir`, `golden hour romance`, `cold thriller`, `magic realism`

### Worked Example
```
Young woman, late 20s, natural hair pinned back, white hospital scrubs stained with coffee. She sits at the end of an empty corridor, back against the wall, knees drawn to chest.
Medium shot, static, slowly tightening to close-up over 6 seconds.
She exhales and lets her head fall back against the wall.
Style: cinematic drama, intimate and quiet.
Lighting: overhead fluorescent cold white + warm glow from vending machine behind her, tired and institutional.
Audio: distant PA system murmur, ventilation hum, squeaky wheel of a cart passing far away.
SFX: soft exhale breath, fabric of scrubs shifting, faint vending machine buzz.
Dialogue: Sofia says "I can't do this anymore" with voice barely above a whisper, cracking on the last word.

Negative: blurry, overexposed, studio backdrop, smiling, cartoon style.
```

---

## RUNWAY 4.5 / GEN-4.5

### Core Formula
Natural, motion-focused sentences. One action verb per sentence. References injected as `@Name` tokens (characters, locations, objects). **No negative prompts** — describe only what you want. Optionally add `[00:00]` timestamps for Gen-4.5 sequential shots. **As of May 2026, Gen-4.5 generates native synchronized audio** — dialogue, SFX, and ambient in one pass, with automatic lip-sync via the GWM Avatars system. Audio cues can be woven inline or split into a dedicated block.

### Native Output Format
```
@Lead [action verb phrase] through/across/toward [environment].
@Lead [secondary single action — new sentence].
Camera [movement] — [speed: slow / steady / smooth / drifting].
Lighting: [time-of-day quality], [mood color temperature], [shadow quality].
[Single style descriptor phrase].

Audio: [ambient bed + key SFX woven into the scene].
Dialogue: @Lead says "[line]" with [vocal tone].

(Optional Gen-4.5 timestamps)
[00:00] @Lead [action].
[00:03] Camera [movement].
[00:06] @Lead [final action].
```

### Reference Syntax
- `@CharacterName` — person reference image
- `@Location` — environment/set reference
- `@Object` — prop reference
- Labels in prompt: `image_1` = lead character, `image_2` = supporting, `image_3` = location

### Motion Vocabulary (use strong verbs)
`strides`, `turns sharply`, `reaches toward`, `leans into frame`, `steps back into shadow`, `pivots`, `collapses onto`, `tilts head toward`

### Camera Vocabulary
`Camera slowly pushes in`, `Camera drifts left`, `Camera holds steady`, `Camera pulls back to reveal`, `handheld camera follows`, `crane shot descends`

### Audio Vocabulary (new in May 2026)
- Ambient: `wet asphalt traffic hiss`, `low room tone`, `evening crickets`, `distant siren rising and falling`
- SFX: `boot heel on grating`, `coat rustle`, `match strike and flare`, `glass clinking on counter`
- Dialogue tones: `barely audible`, `flat and weary`, `taut with restraint`, `voice cracking on the last word`
- Lip-sync is automatic from the generated audio (GWM Avatars); extended conversations remain stable without quality degradation

### Audio Editing on Existing Clips
Gen-4.5 can now also edit the audio of an existing generated video — swap ambient bed, replace SFX, regenerate dialogue with a new tone — without re-rendering the visual.

### What NOT to Include
- No negative prompts (ignored or harmful)
- No abstract style labels ("cinematic" alone is weak — describe concretely)
- No more than one action per sentence
- Keep dialogue lines short (one or two beats per shot); long monologues degrade lip-sync

### Worked Example
```
@Daniel walks down the rain-slicked alley, coat collar turned up, hands deep in pockets.
@Daniel stops and looks up at the rusted fire escape.
Camera slowly pushes in toward his face from behind.
Lighting: deep night, amber streetlight pooling on wet asphalt, hard shadows cutting across his jaw.
Gritty urban noir, texture of wet concrete and corroded metal.

Audio: rain on metal grating, distant car passing through puddles, low traffic hum.
SFX: coat rustle, boot heel scraping asphalt.
Dialogue: @Daniel mutters "I told you not to come here" with voice low and flat, barely above the rain.

[00:00] @Daniel enters the alley from the far end, small against the city.
[00:04] Camera drifts closer as he stops mid-stride.
[00:08] Close on @Daniel's eyes — something crosses his face.
```

---

## HAPPY HORSE 1.0 — Alibaba Taotian Lab (April 2026)

### Core Formula
Six-part positional structure. **Subject anchors at start; camera/motion cues at end carry the highest motion influence.** 15B-parameter unified transformer with native joint audio + multilingual lip-sync. Default prompt length ~20 words; expand only when camera language drives the shot.

### Native Output Format
```
Subject: [physical description, wardrobe, age].
Action: [single declarative verb-led sentence].
Environment: [location, time of day, weather].
Style/Composition: [visual style, framing intent].
Camera Motion: [movement + speed modifier].
Ambiance/Audio: [ambient sound + dialogue if any].
```

### Modes
- T2V, I2V, V2V, Edit
- Up to **5 reference images** for identity / scene anchoring
- Native **1080p** (also 720p), **5–10s** clips (Edit 3–15s)
- Joint audio + multilingual lip-sync: EN, ZH (Mandarin + Cantonese), JA, KO, DE, FR
- Fast: ~38s for 1080p on a single H100

### Multi-Shot Syntax (preferred over long paragraphs)
```
Shot 1 (wide establishing, 0–1s): [action + framing].
Shot 2 (mid tracking, 1–4s): [action + framing].
Shot 3 (slow push-in close, 4–5s): [action + framing].
```

### Camera Vocabulary
- **Framing**: wide establishing, mid tracking, slow push-in close, low-angle wide, macro close-up, locked-off framing, medium close-up
- **Movement**: Steadicam glide, dolly-in, tracking, side tracking, low-angle tracking, lateral orbit with parallax, crane rise, helicopter aerial, pan
- **Lens/Depth**: 35mm telephoto, telephoto compression, shallow depth of field, motion blur

### Lighting Vocabulary (highly responsive)
`blue hour`, `neon noir with mist`, `single hard top-down key with deep falloff`, `warm amber backlight`, `cool blue ambient`, `sodium vapor street lamps`, `soft natural haze`, `natural backlighting`

### Strengths
Aesthetics, photorealism, reflective surfaces (vehicles, water, mirrors), cloth/fabric secondary motion (capes, flags), fire/embers, atmospheric lighting recipes, fast generation, native audio + lip-sync.

### What to AVOID
- Booru tag dumps, JSON, weighted parens (`(word:1.4)`)
- Hedging adjectives: `beautiful`, `stunning`, `epic`, `hyperrealistic`
- Director name-drops alone (`like Villeneuve`) without concrete description
- Unnecessary negative prompts
- Describing emotion without behavior — `man sits alone at empty bar, shoulders forward, staring at glass` beats `lonely figure full of regret`

### Worked Example
```
Subject: Young woman in white hospital scrubs, late 20s, natural hair pinned back.
Action: She sits at the end of an empty corridor, exhales, lets her head fall back against the wall.
Environment: Hospital corridor, late night, fluorescent overhead.
Style/Composition: Cinematic drama, intimate medium shot.
Camera Motion: Static medium, slow push to close-up over 6 seconds.
Ambiance/Audio: Distant PA system murmur, ventilation hum, soft exhale breath. Dialogue: "I can't do this anymore."
```

### HAPPY HORSE EDIT — Source-Preserving Video Editing

**What it does:** Takes a source video (3–15s) + text prompt (+ up to 5 reference images) and rewrites the clip while **rigorously preserving original structure, framing, motion, and composition**. Supports local edits (one element) and global edits (whole-scene restyle).

**Best At:** Restyle, palette/atmosphere/lighting changes, time-of-day shifts, weather changes, aesthetic re-skins.

**Endpoint / Pricing:** `fal.ai/models/alibaba/happy-horse/video-edit` — 720p $0.70/5s, 1080p $1.40/5s.

**Native Output Format:**
```
Source: provided video. [Imperative edit instruction]. 
[Optional reference image directive]. Preserve [what stays constant].
```

**Worked Example:**
```
Source: provided video. Change palette from warm afternoon to cold blue dusk. 
Add light rain on the window behind her. Preserve subject, framing, camera 
move, and performance.
```

---

## GEMINI OMNI FLASH — Google DeepMind (official July 2026)

**July 2026 update:** Omni Flash is now GA — Gemini app, **Google Flow**, YouTube Shorts Remix/Create, and Gemini API preview. Included with Google AI Plus/Pro/Ultra. Its differentiator remains **conversational multi-turn editing** with persistent scene memory; prompting guidance below is unchanged. Runnable via Higgsfield (`gemini_omni`, 720p) or Google Flow (subscription credits).

### Core Formula
**One narrative paragraph, 2–3 sentences**, ordered **Subject → Motion → Camera → Mood/Lighting**. Cinematic vocabulary embedded inline. Audio cues described in prose — the model syncs footsteps to splashes, dialogue to lip-shapes, and ambient room tone automatically in a single generation pass. **No labeled blocks. No negative prompts.** Unified multimodal: accepts text + image + audio (voice ref) + video as inputs. Successor to Veo 3 in capability; community sometimes refers to it as "Veo 4."

### Native Output Format
```
[Subject + appearance] [primary action with cinematic detail]. [Camera angle + movement]. [Lighting + mood + audio cues woven into the scene]. [Optional dialogue inline: Name says "line" with [tone].] [Optional quality boosters: 4K, anamorphic lens, volumetric lighting.]
```

### Modes & I/O
- **T2V**: text only
- **I2V**: text + reference image (animates the still — strong for product mockups, character poses)
- **V2V**: text + reference video (style/motion transfer)
- **Voice-ref**: voice sample for character speech matching
- **Iterative Edit (signature feature)**: chat-based, persistent scene memory across turns
- **Output**: video + native synced audio in one pass (footsteps/dialogue/SFX/ambient all generated together)
- **Resolution**: 720p / 1080p / 4K
- **Frame rate**: 24fps / 30fps
- **Aspect ratios**: 9:16, 16:9, 1:1, 4:3, 3:4, 21:9
- **Duration**: 4s / 8s / 12s (15s standard max)
- **Watermark**: SynthID embedded
- **Negative prompts**: NOT supported

### Conversational Edit Chain Syntax
When refining an existing generation, use one imperative instruction per turn — each builds on the last; characters, physics, and scene state persist:
```
Edit 1: Make the background darker.
Edit 2: Slow the last 3 seconds.
Edit 3: At second 5, pan the camera left.
Edit 4: Change time of day to sunset.
Edit 5: Remove the person on the left.
```

### Camera Vocabulary
`low-angle tracking`, `aerial drone view`, `wide-angle establishing`, `macro close-up`, `85mm portrait`, `Dutch angle`, `anamorphic lens`, `crane descend`, `Steadicam glide`, `over-the-shoulder`, `static locked-off`

### Audio Cues (Inline — Not a Separate Block)
Describe sounds naturally in the prose: *"footsteps synchronized with splashing sounds"*, *"raindrops on umbrella in rhythm"*, *"distant thunder rolling under the dialogue"*. Dialogue uses: `Name says "line" with [emotion]`.

### Quality Boosters
`4K`, `8K`, `cinematic`, `volumetric lighting`, `anamorphic lens flare`, `85mm portrait lens`, `realistic water physics`, `photorealistic`

### Strengths
- **Persistent-memory iterative editing** — no other model in this skill has multi-turn scene memory
- Native synced audio + dialogue + SFX in single pass (no separate TTS or Foley needed)
- Strongest physics understanding in 2026: gravity, fluid dynamics, kinetic energy
- 4K native + 6 aspect ratios (widest range here)
- Multimodal references (text + image + voice + video in one call)

### What to AVOID
- Labeled blocks (`SCENE:`, `CAMERA:`, `AUDIO:`) — this is Veo 3 / Kling 3.0 syntax, NOT Omni
- Negative prompts — ignored
- Markdown fences or bullet lists in the prompt body
- Hedging adjectives (`beautiful`, `epic`, `stunning`) — describe concretely instead

### Worked Example — Initial Generation
```
Person walking through puddles in heavy rain, footsteps synchronized with splashing sounds, raindrops hitting umbrella in rhythm with the audio. Low-angle tracking shot at street level, camera drifting forward. Moody overcast atmosphere, sodium streetlamp glow reflecting off wet asphalt, cinematic 4K, realistic water physics.
```

### Worked Example — 3-Turn Edit Chain (after the above)
```
Edit 1: Slow the last 3 seconds to half-speed.
Edit 2: Add distant thunder rolling under the rain.
Edit 3: At second 5, pan the camera left to reveal a parked car with headlights cutting through the rain.
```

---

## LTX-2.3 — Lightricks (March 2026, open source)

### Core Formula
**Single flowing screenplay-format paragraph, 4–8 sentences.** Open with a slugline (`EXT./INT. LOCATION – TIME OF DAY – [optional context]`), then describe action sequentially in present tense, embed camera direction inline, and put dialogue in quotation marks. Audio is implied by the scene (rain, footsteps, room tone) — the model generates synchronized audio in the same forward pass. No labeled blocks, no bullet lists, no negatives.

### Native Output Format
```
EXT./INT. LOCATION – TIME OF DAY – [optional context].
[Opening shot description with subject + framing + lighting in a single sentence].
[Action sentence — subject + verb + object, sequential beats].
[Camera move embedded inline — "the camera pans right, slowly revealing…"].
[Dialogue — "exact line in quotes", optionally noting language/accent].
[Continued action / final beat with audio implied by scene].
```

### Modes & I/O
- **T2V, I2V (First Frame), V2V** + LoRA-trainable
- **22B-parameter Diffusion Transformer**, native audio-video joint generation
- **Up to 4K @ 50fps**, clips up to **20s** (longest in this skill)
- Aspect ratios: **9:16 portrait** + landscape; FPS options 24 / 48 / 50
- Open weights on HuggingFace (`Lightricks/LTX-2.3`); inference & LoRA trainer on GitHub
- Available hosted on fal.ai, WaveSpeed, RunDiffusion

### Camera Vocabulary (embed inline as prose)
`follows`, `tracks`, `pans across`, `circles around`, `tilts upward`, `pushes in`, `pulls back`, `overhead view`, `handheld movement`, `over-the-shoulder`, `wide establishing shot`, `static frame`, `the camera shakes slightly`

### Dialogue Formatting
- Place dialogue in quotation marks.
- If non-English, name the language and accent: *He replies in Mandarin with a Beijing accent: "我已经告诉你了。"*
- For First Frame (I2V): **describe motion and action only** — don't redescribe the still.

### Strengths
- True screenplay-format authoring (best fit for writers porting scripts directly)
- Longest single-clip duration here (20s)
- Open-source — LoRA-trainable for custom style, runs locally on capable hardware
- Native synced audio + ambient room tone

### What to AVOID
- Bullet lists, labeled blocks (`SCENE:`, `CAMERA:`), JSON
- Negative prompts (no support)
- Redescribing the input image in First Frame mode
- Overly short prompts — aim for 4–8 sentences of cohesive narrative

### Worked Example
```
EXT. SMALL TOWN STREET – MORNING – LIVE NEWS BROADCAST.
The shot opens on a news reporter standing in front of cordoned-off cars, yellow caution tape fluttering behind him. Warm early sun reflects off the camera lens. The reporter, composed but visibly excited, looks directly into the camera, microphone in hand. He says in English with a soft New England accent, "Thank you, Sylvia — this morning, here in the quiet town of New Castle, Vermont, black gold has been found." He gestures toward the field behind him. The camera pans right, slowly revealing a construction site. With a sudden roar, a geyser of oil erupts from the ground. Workers cheer, the black stream glistening in the morning light. The camera shakes slightly through the chaos.
```

---

## HAILUO H3 (3.0) — MiniMax

### Version Note (2026-07-31)
**MiniMax H3** — marketed as **Hailuo 3.0 / Hailuo 03** — **launched July 31, 2026** and is now the current MiniMax video model, superseding Hailuo 2.3 (Oct 28, 2025). This resolves the long-standing "Hailuo 3 is roadmap-only" caveat in earlier revisions of this skill: **H3 is real and released.** It is a **general-purpose omni-modal generation model** — one pipeline that jointly understands and generates across text, images, video, and audio, rather than a video-only generator with bolted-on extras. MiniMax has stated it will **open the model weights** shortly after launch, which would make H3 the only open-weight model in this skill's video roster alongside LTX-2.3. **Hailuo 2.3 remains available** and is still the cheapest/fastest option for quick 1080p drafts; prefer H3 when you need 2K, native stereo audio, omni-reference consistency, or editing.

### Core Formula
Still a **"Director's AI"** — it wants a **short narrative script**, not a checklist — but H3 adds a second axis: **omni-reference**. Write the scene as natural narrative flow with cinematography direction inline (strong on temporal relationships — "then", "as she", "moments later"), then attach reference media for anything that must stay *locked* (character, location, motion, voice). Text carries the *performance*; references carry the *identity*.

### Native Output Format
```
[Subject + appearance], [opening action and emotional beat].
[Cinematography direction inline — shot size, angle, lens].
[Camera movement and pacing — "the camera slowly pushes in…"].
[Environment cues — light, weather, time of day].
[Optional audio/music direction — score temp, ambient bed].
```

### Modes & I/O
- **Generation:** T2V, I2V, first-and-last-frame, omni-reference (mixed inputs), T2A (audio only)
- **Transformation:** V2V **motion transfer** (carry motion from a source clip onto new subjects), **instruction-based editing** ("change X, keep everything else"), image reference/editing
- **Output:** **5–15s**, **native 2K** (1440p short edge) or 768p, **24fps** fixed
- **Aspect ratios (6):** 21:9, 16:9, 4:3, 1:1, 3:4, 9:16
- **Audio:** **native stereo**, generated in the same pass — voice, SFX, and music are modeled *jointly* rather than as separate tracks. Supports **voice cloning / voice transfer** from a reference audio clip.
- **Multi-shot** is natively modeled (not a stitching layer), with character consistency across shots when the same reference set is reused

### Omni-Reference — Input Budget
One generation accepts **up to 9 images + 3 video clips + 3 audio files, 12 files maximum**. Each reference can play a different role:

| Reference | Typical job |
|---|---|
| Image | Character identity, wardrobe, location, style plate |
| Video | Motion pattern, edit rhythm, camera behaviour (motion transfer) |
| Audio | Voice identity (cloning), music bed, ambient character |

- Reference **video and audio run 2–15s each**, **15s total** across all clips
- **Audio cannot travel alone** — it must accompany at least one image or video reference
- Reference quality dominates output quality: balanced lighting, clear face angles, and clean audio beat noisy screen grabs every time

### Camera Vocabulary
- **Basic**: `dolly`, `zoom in`, `zoom out`, `close up`, `wide shot`, `over-the-shoulder`
- **Advanced**: `crane shot`, `tracking shot`, `POV`, `roll`, `whip pan`, `Dutch angle`, `lateral orbit`
- **Lens cues**: `85mm portrait lens`, `wide-angle distortion`, `telephoto compression`, `shallow focus`

### Style Vocabulary
Carried forward from 2.3 and still valid: `anime`, `illustration`, `ink-wash painting`, `game-CG art`, `claymation`, `oil-painting motion`, `cel-shaded`, in addition to photorealistic and cinematic. H3 also renders **text and brand marks** noticeably more reliably than 2.3 — usable for product/UI work.

### Strengths
- **Omni-reference consistency** — lock character, location, motion, and voice simultaneously in one call; the strongest identity-locking budget in this skill after Seedance
- **Native stereo audio with joint voice/SFX/music modeling** — dialogue sits in the room rather than on top of it
- **Motion transfer** — reuse a performance or camera behaviour across different subjects
- **Instruction-based editing** without masks
- **Aggressive pricing** — MiniMax claims 2K costs **under a third** of mainstream rivals, and 768p **under half** of rivals' 720p
- **Open weights** promised — self-hosting and LoRA work become possible

### What to AVOID
- Checklist-style prompts (bullet points, labeled blocks) — Hailuo still prefers script-style narrative
- Conflicting camera moves in one shot — pick one primary
- Stacking too many stylization modifiers — choose one aesthetic anchor
- **Audio-only reference sets** — audio must ship alongside an image or video reference
- Blowing the reference budget on redundant plates: 9 near-identical character stills teach less than 3 good ones plus a location and a motion clip

### Worked Example — T2V with audio
```
A young woman in her late twenties, hair pulled into a messy bun, sits on the edge of a hotel bed in a faded silk robe, staring at a phone face-down on the nightstand. A medium shot from a low angle, 35mm lens, shallow focus on her hands. The camera slowly pushes in as she reaches for the phone, hesitates, then pulls back. Dim tungsten lamp on the nightstand throws a single warm pool of light across her face; the rest of the room sinks into shadow. Ambient: distant elevator chime, faint hallway voices, slow piano under the scene at low volume.
```

### Worked Example — Omni-reference (character + location + voice locked)
```
[Image1] the woman  ·  [Image2] her wardrobe  ·  [Image3] the hotel corridor
[Video1] the walking cadence to match  ·  [Audio1] her voice

She walks the length of the corridor at the pace of the reference clip, one hand
trailing the wallpaper, and stops at the last door. Tracking shot from behind at
shoulder height, 35mm, the corridor lights blowing out gently as she passes each
sconce. She says, quietly, "I shouldn't be here." Ambient: carpet-muffled
footsteps, the hum of a distant ice machine.

Keep her face, wardrobe, and voice locked to the references; match the corridor
to Image3.
```

---

## PIKA 2.5 — Pika Labs

### Core Formula
Pika treats prompts as **directives, not literary descriptions**. Pick the right Pika feature (T2V / I2V / Pikaframes / Pikaswaps / Pikadditions / Pikaffects / Pikascenes) and write a single imperative sentence or short paragraph naming the change. Integrated SFX generation auto-matches on-screen action.

### Feature Map
| Feature | Use For | Input |
|---|---|---|
| **Pika 2.5 T2V / I2V** | Standard generation | Text (+ optional image) |
| **Pikaframes** | Keyframe interpolation — 2–5 stills become a smooth motion clip up to **25s @ 1080p** | 2–5 images + transition prompt |
| **Pikaswaps** | Replace an object in existing footage (preserving lighting + motion) | Source video + replacement prompt or image |
| **Pikadditions** | Insert new characters/objects/creatures into footage | Source video + insertion prompt |
| **Pikaffects** | Creative physics effects: inflate, melt, explode, squish, "turn into cake" | Source video + effect keyword |
| **Pikascenes** | One-shot scene generation from a single text/image | Text or image |
| **Pikaformance** | Animate lips/eyes/expressions in near real time | Portrait image + audio |
| **PikaStream 1.0** | Real-time avatar for live video meetings (Google Meet) | Avatar config + voice |

### Native Output Format (Generation)
```
[Subject + setting]. [Single primary action]. [Style / mood anchor]. [Audio direction implied — SFX generated automatically].
```

### Native Output Format (Pikaframes)
```
Transition from [image_1: brief scene tag] to [image_2: brief scene tag] through 
[type of motion — push, drift, morph, fade]. [Optional mid-frame poses].
```

### Native Output Format (Pikaswaps / Pikadditions)
```
[Pikaswap | Pikaddition]: [exact element to change/insert]. Match [lighting, scale, perspective, motion] of the source.
```

### Strengths
- Most distinct **edit-without-rotoscope** suite (swap / add / effect on existing clips)
- Pikaframes is the best tool here for **stitching still images into a longer beat** (25s)
- Pikaffects unlocks viral/surreal physics aesthetics in one keyword
- PikaStream is the only model in this skill with **live-meeting avatar** rendering

### What to AVOID
- Long descriptive paragraphs — Pika prefers terse directives
- Multi-axis edits in Pikaswaps / Pikadditions (one element per pass)
- Treating Pikaframes as a generator from scratch — it needs anchor images

### Worked Example — Pikaframes (5 stills → 25s)
```
Transition from image_1 (woman alone on a rainy balcony at dawn) through image_2 
(she lights a cigarette), image_3 (she turns toward the door), image_4 (a man's 
silhouette appears in the doorway), to image_5 (her hand drops the cigarette). 
Slow drift between frames, melancholy pacing, natural breath and clothing motion 
between poses.
```

### Worked Example — Pikaswap
```
Pikaswap: replace the coffee cup in the woman's hand with a folded handwritten 
letter. Match lighting, scale, hand contact, and the camera move of the source.
```

### Worked Example — Pikaffect
```
Pikaffect: melt the office desk into golden honey over 3 seconds, papers floating 
in the flow, keep subject and camera unchanged.
```

---

## Universal Drama Prompting Principles

### Emotion First
Lead with the micro-expression or internal state before the action. `Jaw tightening with suppressed rage` beats `angry face`.

### Specificity Over Abstraction
`Worn leather jacket, third button missing, collar frayed` beats `casual clothing`. Specificity tells the model what kind of world this is.

### One Primary Camera Move
Pick ONE camera movement per shot. Layering `push-in + pan + tilt` produces unstable output. Let the single move carry the emotion.

### Lighting as Character
Lighting communicates psychology. `Single candle casting half her face in shadow` tells a story without words. Map light sources to emotional state.

### Sound Anchors the Scene (Veo 3 / Kling / Happy Horse)
Diegetic sound (`the sound of her keys hitting the floor`) pulls viewers into the physical world. Silence described as `ambient sound drops to almost nothing` is also powerful. Happy Horse adds multilingual lip-sync — name the language explicitly when non-English.

### Duration Matching
| Model | Sweet Spot |
|---|---|
| Seedance 2.5 / 2.0 | 6–10s per shot (T2V/I2V); Edit & Extension up to **15s** per pass on 2.0 — **2.5 does up to 30s single-pass (~3 min beta)** |
| Kling O1 | 5–10s output (Edit/V2V input 3–10s) |
| Kling 3.0 | 8–12s for 3-cut sequences (3–15s window) |
| Veo 3 | 6–8s |
| Runway 4.5 | 5s (single beat) or 10s (arc); audio-edits on existing clips |
| Happy Horse 1.0 | 5–10s output (Edit 3–15s) |
| Gemini Omni | 4 / 8 / 12s (sweet spot 8s, 15s max) |
| LTX-2.3 | up to **20s** (longest); 4K@50fps capable |
| Hailuo H3 | **5–15s** @ native 2K/24fps with stereo audio; Hailuo 2.3 still fastest for 6s 1080p drafts (30–90s gen) |
| Pika 2.5 | 5s standard; **Pikaframes up to 25s** with 2–5 anchor images |

---

## Editing Existing Footage (Seedance 2 Edit / Kling O1 Edit / Happy Horse Edit / Hailuo H3 / Gemini Omni / Pika)

Six routes for editing a ready video in this skill — each with a distinct sweet spot. **Hailuo H3 joined this list on 2026-07-31** with instruction-based editing and V2V motion transfer. Veo 3, Kling 3.0, and LTX-2.3 do not reposition a camera or restyle existing footage in a meaningful way. Runway 4.5 can now edit the **audio** of existing clips (May 2026) but does not restyle the visual stream.

### One Change-Axis Per Prompt
Multi-axis edits degrade quality on all source-preserving models. Don't combine *swap background + change time-of-day + relight* in one pass. Chain them as sequential edits instead.

### Explicitly State What Stays Constant
All edit models honor negative-constraint phrasing. End every edit prompt with `Keep [subject / framing / camera move / lighting / performance] unchanged`. Without this, the model may drift on dimensions you wanted preserved.

### Reference Images, Not Masks
None of these models require masks, keyframes, or rotoscoping. Anchor identity, style, or replacement content via:
- **Seedance 2 Edit**: `@Image1–9`, `@Video1–3`, `@Audio1–3` (max 12 total across modalities)
- **Kling O1 Edit**: `@Image1` for a single still, `@Element1` (multi-image bundle, up to 4) for cross-shot identity, `@Video` for motion transfer
- **Happy Horse Edit**: up to 5 reference images per call
- **Hailuo H3**: up to 9 images + 3 videos + 3 audio (max 12); reference video/audio 2–15s each, 15s total; audio must accompany an image or video

### Choosing Between Seedance 2 Edit / O1 Edit / Happy Horse Edit / Hailuo H3 / Gemini Omni / Pika / Runway audio-edit
| Use case | Pick |
|---|---|
| Inpaint-style **character / object replace** in source footage (with `@Image` anchor) | **Seedance 2 Edit** |
| **Motion transfer** onto a different subject + **voice cloning** in the same pass | **Hailuo H3** |
| Instruction-based edit at **2K with native stereo audio**, cheapest 2K tier | **Hailuo H3** |
| **Multimodal reference call** — pull from up to 9 images + 3 videos + 3 audio in one pass | **Seedance 2 Edit / Reference-to-Video** |
| Source clip up to **15s** with native audio + multilingual lip-sync regenerated | **Seedance 2 Edit** |
| **Cheapest source-preserving edit** (40% discount with video input on fal) | **Seedance 2 Edit** |
| Video **extension** (continue an existing clip forward) | **Seedance 2 Extension** (or Kling O1 Edit) |
| Camera-motion transfer from a reference video | **Kling O1 Edit** |
| Outfit / subject / background swap with strong **identity lock** across shots | **Kling O1 Edit** (multi-image Elements) |
| Dialogue-preserving edit where **lip-sync must stay frame-exact** | **Kling O1 Edit** or **Happy Horse Edit** (Seedance Edit may regenerate face) |
| Restyle: palette, atmosphere, time-of-day, weather, lighting mood | **Happy Horse Edit** |
| Aesthetic re-skin while preserving motion rigorously | **Happy Horse Edit** |
| **Iterative multi-turn refinement** (each edit builds on the last, characters/physics persist) | **Gemini Omni** (only model with persistent scene memory) |
| Conversational/chat-style editing in plain English | **Gemini Omni** |
| Native synced audio adjustment as part of a visual edit | **Gemini Omni** |
| **Swap a single object** in footage (cup → letter, dog → robot) | **Pika 2.5 — Pikaswaps** |
| **Insert** a new character / creature / object into footage | **Pika 2.5 — Pikadditions** |
| Creative physics effect (melt, inflate, explode, "turn into cake") | **Pika 2.5 — Pikaffects** |
| Edit **only the audio** of an existing clip (swap SFX, regenerate dialogue) without re-rendering visuals | **Runway 4.5** (audio editing, May 2026) |

### Source Duration Limits
- **Seedance 2 Edit / Extension**: source up to **15s** per pass; output 4–15s.
- O1 Edit: **3–10s**. Trim longer source clips first.
- Happy Horse Edit: **3–15s**.
- Gemini Omni iterative edit: chain edits across turns; underlying clip stays within the 4 / 8 / 12s generation envelope.
- Pika edits: source video as ingested by the chosen feature (Pikaswaps / Pikadditions / Pikaffects).

### What These Tools Cannot Do
- **Reposition a camera on existing footage** (no NeRF / 3D scene reconstruction). For a different camera angle of the same scene, **plan the angle before generation** — don't shoot a default angle and try to "move the camera" after.
- **Guarantee frame-exact lip-sync on dialogue** — Seedance 2 Edit preserves motion/lighting/timing, but face/mouth/teeth are not explicitly documented as locked. For dialogue-heavy edits where any drift breaks sync, Kling O1 Edit and Happy Horse Edit remain safer.
- **Replace recorded dialogue audio with an external file** — none of these tools accept user-supplied audio as the dialogue track. Mix your existing audio in post.

---

# PART 2 — IMAGE MODELS

Still-image generation for character reference sheets, key art, storyboards, posters, and — most importantly for cinematic short-form — **first frames that seed image-to-video**. Six leaders below, plus honorable mentions. The defining 2026 capability across all of them is **character/identity consistency from reference images** (and, for FLUX.2 [dev], trainable LoRA characters). Lead with consistency thinking, not just aesthetics.

## Image Model Quick-Pick Guide

| Goal | Best Model |
|---|---|
| Best overall **prompt adherence / instruction-following**, complex multi-element scenes, reasoning before render | **GPT Image 2** |
| **Character & multi-subject consistency** from references (no training) + native 4K | **Nano Banana Pro** / **Seedream 5.0** |
| **Maskless conversational / iterative editing** (each turn builds on the last) | **Nano Banana Pro** |
| **Best-in-class legible text / typography / posters** | **Ideogram 4.0** (then Nano Banana Pro, GPT Image 2) |
| **Trainable reusable custom character** (open weights + LoRA), local pipelines | **FLUX.2 [dev]** |
| Multi-reference identity lock in the **open-weight** space (up to 10 refs), JSON prompting | **FLUX.2** |
| **Same-vendor stills → video** (Seedream 5.0 → Seedance 2.0) — tightest consistency | **Seedream 5.0** |
| **Look-dev, mood boards, aesthetic reference sheets** | **Midjourney V8.1** |
| **Mask-based inpainting** + identity-preserving edits via API (`input_fidelity=high`) | **GPT Image 2** |
| **Vector / brand / print** design output (SVG) | **Recraft V4** (honorable mention) |
| Open-weight **bilingual (ZH/EN)** generate + edit | **Qwen-Image 2.0** (honorable mention) |

---

## GPT IMAGE 2 — OpenAI (April 2026)

API id **`gpt-image-2`** (branded **"ChatGPT Images 2.0"** in ChatGPT). The model the user may call "GPT2." Launched April 21, 2026 — the first OpenAI image model with built-in **visual reasoning** (it reasons about layout, composition, and object relationships before generating). Lineage: 4o image gen → gpt-image-1/-mini → gpt-image-1.5 (deprecated) → **gpt-image-2**.

### Core Formula
Format is **flexible** — minimal prompts, descriptive paragraphs, instruction-style, JSON-like, and tag lists all work "as long as intent and constraints are clear." For production, prefer a **skimmable, constraint-led template** over clever syntax: scene/background → subject description → key visual specs → **explicit constraints (preserve vs. change)** → intended use case. It rewards hard rules and explicit consistency clauses.

### Native Output Format
```
[Format + aspect, e.g. "Cinematic vertical 9:16 first-frame"].
Subject: [age, build, defining features, wardrobe].
Scene: [location, time of day, atmosphere].
Look: [color grade, depth of field, key/rim lighting].
Framing: [shot size, eyeline, composition].
Text: ["LITERAL COPY in quotes" + font, or "none"].
Hard constraints: [what must stay identical; photoreal; no logos/watermark].
Use case: [e.g. first frame for image-to-video].
```

### Modes & I/O
- **T2I**, **mask inpainting** (edits endpoint — mask needs an alpha channel, same format/size as source, <50MB), **multi-image reference input** (index them: "Image 1: product… Image 2: style…").
- **`input_fidelity=high`** preserves faces/identity/fine detail during edits — the key flag for character sheets.
- **Sizes:** any resolution with longest edge ≤ **3840px** (4K-class), both edges multiples of 16, **aspect ratio ≤ 3:1**. ChatGPT app cites "up to 2K" for typical workflows. **No transparent backgrounds.**
- **Text rendering:** strong EN + multilingual (incl. CJK, Hindi, Bengali). Use medium/high quality for small text; literal copy in quotes or ALL CAPS.
- **Provenance:** C2PA Content Credentials **and** invisible SynthID on all ChatGPT/API/Codex outputs.
- **Availability:** ChatGPT (Images 2.0), OpenAI API, Codex. **US-accessible.**
- **Pricing (per image, square):** low ≈ $0.005–0.006 · medium ≈ $0.04–0.05 · high ≈ $0.165–0.21. (Token-based: image output $30 / 1M tokens.)

### Strengths
Top overall **prompt adherence** (reasons before rendering), reliable text, instruction-led editing with identity preservation.

### What to AVOID
- Expecting **transparent PNGs** (unsupported in v2 — use Ideogram or an earlier model).
- Relying on **pure text re-prompting** for a recurring character — feed the prior output back via the edits endpoint with `input_fidelity=high` and repeat the preserve-clause each iteration.
- Dense text layouts — placement can still drift; keep critical copy short.

### Worked Example
```
Cinematic vertical 9:16 first-frame for a cinematic short-form scene.
Subject: woman, late 20s, sharp dark bob, single freckle below the left eye, charcoal tailored blazer over white silk camisole.
Scene: rain-streaked floor-to-ceiling window of a luxury high-rise office at dusk, city bokeh behind her.
Look: moody teal-and-amber cinematic grade, shallow depth of field, soft key from window-left, subtle rim light.
Framing: medium close-up, eyeline slightly off-camera, head-and-shoulders in upper third.
Text: none.
Hard constraints: keep facial features, proportions, freckle placement, and wardrobe exactly consistent for reuse across the series; photoreal, no text, no logos, no watermark.
Use case: first frame for image-to-video.
```
For sequels, pass this image back into the **edits endpoint with `input_fidelity=high`**, repeating the consistency clause.

---

## NANO BANANA PRO — Google (Gemini 3 Pro Image, Nov 2025 → 2026)

Flagship API id **`gemini-3-pro-image`** (reasoning-driven, studio-grade). Plain **"Nano Banana"** = the older `gemini-2.5-flash-image` (fast/cheap fallback). A fast tier **Nano Banana 2** (`gemini-3.1-flash-image`) also exists. **For character-led cinematic work, default to Nano Banana Pro.**

### Core Formula
Google's guidance: **descriptive, narrative prompts — not keyword lists.** Structure: **`[Subject] + [Action] + [Location/context] + [Composition] + [Style]`**, opening with a strong verb. Responds well to **conversational iteration** for edits.

### Native Output Format
```
[Reference images of the character(s); state "keep face/hair/wardrobe exactly as references"].
[Subject] [action] in [location/context]. [Composition: shot size, angle, lens/DoF].
[Lighting recipe] + [color grade / film stock]. [Materiality details].
[Optional text: "LITERAL COPY" + font]. [Resolution + aspect ratio].
```

### Modes & I/O
- **Maskless conversational editing** — describe the change in words ("replace the sky with a neon thunderstorm"); the model finds boundaries and relights automatically. Refine across turns.
- **Multi-image blending:** up to **14 input images**. Reference limits (Pro): up to **6 object + 5 character** images per prompt. 1–4 variations per request.
- **Character consistency:** holds up to **5 people** in one scene (faces, clothing, style). Pattern: `[reference set] + [relationship instruction] + [new scenario]`.
- **Resolutions:** 1K / 2K / **4K** (~16 MP). **Aspect ratios:** 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9 (+ banner ratios). For I2V first-frames: **16:9 / 9:16**.
- **Text rendering:** best-in-class legible, multilingual text; can translate rendered text in one pass.
- **Watermark:** invisible SynthID on all outputs; the *visible* "Gemini sparkle" is **dropped on AI Studio / API / AI Ultra** outputs.
- **Availability (US):** Gemini app, Google AI Studio, Gemini API, Vertex AI, plus fal.ai / Replicate.
- **Pricing (Pro):** ~$0.134 (1K–2K) / ~$0.24 (4K) official; fal $0.15 / $0.30.

### Strengths
Character consistency, **maskless conversational editing**, best-in-class text, native 4K, physics-aware controls (day↔night, focus, color grade).

### What to AVOID
- Keyword soup — write narrative scene descriptions.
- Negative phrasing — say "empty street," not "no cars."

### Worked Example
```
[Reference: 3 images of "Elena" — woman, late 20s, auburn hair, green eyes, freckles.] Keep Elena's face, hair, and freckles exactly as in the references.
Elena, in a tailored charcoal wool coat, turns her head toward the window, lips slightly parted as if interrupted mid-thought, in a rain-streaked penthouse office at night with city-light bokeh beyond the glass. Medium close-up, slightly low angle, shallow depth of field (f/1.8), framed left-of-center for dialogue space. Moody teal-and-amber grade, soft key from the left, cinematic character still. Render the desk nameplate text "E. VANCE" in a clean engraved serif. 16:9, 2K.
```
Then iterate: *"Same frame, but switch the key light to warm golden-hour from the right and add a faint smile."*

---

## SEEDREAM 5.0 — ByteDance

Current flagship **Seedream 5.0** (~Feb 2026) + fast **Seedream 5.0 Lite**; 4.0/4.5 still common in production. **Pairs natively with Seedance 2.0 video** — the tightest same-vendor stills→video path.

### Core Formula
Natural language with **explicit intent** — state layout, subject identity anchors, and style directly. Strong bilingual (ZH/EN). Editing (SeedEdit) is unified into the same model via plain-language instructions ("remove the boy," "replace this dog with a Schnauzer," "copy the text in Figure 3 to the top").

### Native Output Format
```
[Shot size] of [subject + defining features + wardrobe], in [location + time of day],
[lighting + color grade], [lens/DoF], [aspect ratio], [resolution].
Keep facial identity consistent with the reference image(s).
```

### Modes & I/O
- Unified **generation + multi-image editing**. Up to **14 reference images** (5.0; 4.5 = 10) to lock a character — excels at material fidelity (fabric, metal, skin) rather than averaging detail away.
- **Native 4K** (3840×2160 / 3840×3840 / 2160×3840) without upscale; custom dimensions ~1920–4096px/axis. v5.0 adds real-time world-knowledge grounding.
- **Crisp text rendering** incl. small overlays.
- **Availability (not US-restricted):** Dreamina (CapCut), BytePlus/ModelArk, fal.ai (4.5 + 5.0 Lite at day-0), Replicate, WaveSpeed.
- **Pricing:** 4.0 ≈ $0.03 · 4.5 edit ≈ $0.04 · 5.0 Lite (fal) ≈ $0.035 flat (4K included). *(Full 5.0 per-image price not pinned — verify on fal/BytePlus at use time.)*

### Strengths
Reference-driven **identity lock**, native 4K, bilingual text, and the **Seedream → Seedance** same-vendor I2V handoff.

### What to AVOID
- Vague identity anchors — name concrete, repeatable features and reuse the same reference set every shot.

### Worked Example
```
Cinematic medium close-up of a 30-year-old Korean businessman, sharp jawline, short black hair, charcoal three-piece suit, standing in a glass penthouse office at golden hour. Shallow depth of field, warm rim light, photoreal skin texture. 16:9, 4K. Keep facial identity consistent with the reference image.
```

---

## FLUX.2 — Black Forest Labs (Nov 2025 → 2026)

The **open-weight / LoRA** route — the only family here you can train a reusable custom character into.

- **FLUX.2 [pro]** — best overall quality (BFL API + partners).
- **FLUX.2 [flex]** — developer control over steps & guidance scale; best for fine text/detail tuning.
- **FLUX.2 [dev]** — **32B open-weight** unified gen+edit; local pipelines + **LoRA-trainable**. License: **FLUX [dev] Non-Commercial**.
- **FLUX.2 [klein]** — Apache-2.0, distilled lightweight model.
- **FLUX.1 Kontext** — prior-gen dedicated instruction-edit / character model (still solid; FLUX.2 [dev] now beats it on single-reference editing).

Best-for: max quality → **pro** · tunable/text-heavy → **flex** · custom characters/local/LoRA → **dev** · cheap/light → **klein** · legacy edits → **Kontext**.

### Core Formula
Detailed natural language **or** structured **JSON prompts** for multi-subject control and precise attribute consistency. Multi-reference syntax uses **`@`** tokens (`@image1 wearing the outfit from @image2`). [pro] auto-upsamples prompts by default.

### Native Output Format (JSON, dev/pro)
```json
{
  "scene": "cinematic first-frame, dim hospital corridor at night",
  "subject": "@ref1 — exhausted female surgeon, mid-30s, auburn hair in a low bun, blue scrubs",
  "camera": "35mm, eye-level, shallow depth of field",
  "lighting": "cold fluorescent overheads, teal-orange grade",
  "consistency": "preserve face and hair exactly from @ref1",
  "aspect_ratio": "16:9",
  "quality": "photoreal, fine skin texture, 4MP"
}
```

### Modes & I/O
- Unified gen + edit; **up to 10 reference images** simultaneously — strongest multi-reference consistency in the open-weight space. Edit up to 4 MP.
- **[dev] is fine-tunable + LoRA-trainable** — the main route to a trained, reusable custom character.
- Strong text rendering (typography, infographics, UI mockups).
- **Availability:** BFL Playground/API, fal.ai, Replicate, Runware; local (HuggingFace weights + GitHub inference).
- **Pricing (API):** [pro] $0.03 first MP + $0.015/extra MP (≈$0.045 at 1080p); [flex] $0.05/MP; [dev] free to self-host (non-commercial), pay-per-use on partners.

### Strengths
Open weights + LoRA (trainable characters), up to 10-reference identity lock, JSON precision, local/offline pipelines.

### What to AVOID
- Assuming [dev] is commercially licensed — it's **non-commercial**; for commercial use go [pro]/[flex] (API) or [klein] (Apache-2.0).

---

## MIDJOURNEY V8.1 — (default since June 11, 2026)

Best for **look-dev, mood, and aesthetic reference sheets**. Weaker exact-identity control than Seedream/FLUX reference workflows, and its terms restrict heavy API/pipeline automation — use it for art direction, not deterministic production pulls.

### Core Formula
Concise descriptive phrase **+ parameters** (less verbose than FLUX/Seedream). Key params:
- `--ar` aspect ratio · `--s` / `--stylize` 0–1000 (low = literal/photoreal, 300+ = artistic)
- `--sref <url>` style reference · `--sw` style weight 0–1000
- **`--oref <url>` Omni Reference** (replaced `--cref`) · `--ow` omni-weight 0–1000 (100–300 strong resemblance, 300–1000 max fidelity) — the 2026 character-lock mechanism (≈2× GPU cost)
- `--raw` more literal control · `--hd` native 2048px · `--exp` experimental aesthetics

`--cref`/`--cw` only work on V6/Niji 6 and error on V7/V8.

### Modes & I/O
- **Editing:** Web Editor with **Vary Region** (inpaint), **Retexture** (re-skin geometry), Pan, Zoom Out, Remix.
- **I/O:** image + text in; PNG out up to **2K** native. Web app + Discord. Niji 7 = anime model.
- **Availability:** subscription-only, **no free tier**. Pricing: Basic $10 · Standard $30 · Pro $60 · Mega $120/mo. Stealth/commercial on Pro+; companies >$1M revenue must use Pro/Mega.

### Worked Example
```
cinematic portrait of a young billionaire heir, tailored navy suit, rooftop bar at dusk, moody neon reflections, film grain, shallow focus --ar 9:16 --oref <character_url> --ow 350 --s 100 --raw --hd
```

---

## IDEOGRAM 4.0 — (open-weight, June 3, 2026)

**Best-in-class text rendering and typography** — dense, legible, correctly-spelled letterforms placed where you ask. Now the family's first **open-weight** model (9.3B single-stream DiT), with native 2K, native **background transparency**, and bounding-box layout control.

### Core Formula
Put **exact words in quotes** and name the typographic style. v4 adds **structured JSON prompting** with bounding-box layout and 16-color palette specs — strong for design/brand pipelines. Style Reference (up to 3 images) carries over from v3.

### Modes & I/O
- Layout control, transparency, style-reference consistency, deterministic JSON placement.
- **Availability:** ideogram.ai, developer API, fal.ai; open weights available.
- **Pricing:** subs $7–$42/mo · API $0.03–$0.10/image · fal per-MP ($0.03 Turbo / $0.06 Balanced / $0.10 Quality).

### Worked Example
```
Vintage travel poster for "LAKE COMO", bold condensed serif headline at top reading "LAKE COMO" in cream, smaller script subtitle below reading "Italy's Jewel", Art Deco sunburst behind a sailboat on turquoise water, muted teal-and-gold palette, clean flat illustration, generous margins, 2:3 portrait.
```

---

## Honorable Mentions

- **Reve (Reve Image 1.0 / "Halfmoon")** — top-tier prompt adherence (~89% multi-element consistency), native 2048² + 4K upscale, strong typography. Credit-based freemium.
- **Recraft V4** (Feb 2026) — design-taste leader across **raster + native SVG vector**; precise text placement; print-ready logos. recraft.ai / Replicate / fal. ~$0.04 raster / $0.08 vector.
- **Qwen-Image 2.0** (Alibaba, Feb 2026) — best **open-weight, bilingual (ZH/EN)** unified gen+edit (Apache-2.0 on the edit line); semantic + pixel text rewriting. HuggingFace + DashScope + fal/Replicate; free to self-host.

---

## Universal Image Prompting Principles

### Character Consistency Is the Whole Game
For recurring characters, **build one canonical reference image first, then reuse it verbatim** across every subsequent generation/edit. State explicitly what must stay identical (face, hair, freckles, wardrobe). Reference-image-driven edits beat pure text re-prompting every time. For a *trained* reusable character, only **FLUX.2 [dev] + LoRA** offers true weights-level training.

### Reference Caps by Model
Seedream 5.0 — **14** · Nano Banana Pro — **14 total (6 object + 5 character)** · FLUX.2 — **10** · GPT Image 2 — multiple (use `input_fidelity=high`) · Ideogram — **3** style refs · Midjourney — Omni Reference (`--oref`).

### Specificity Over Abstraction
`navy blue tweed, third button missing` beats `a suit`. Name lens (`35mm, f/1.8`), lighting recipe (`soft key window-left + rim`), color grade (`teal-orange`), and materiality. Same discipline as the video side.

### Positive Framing
Describe what you want present, not absent — `empty street` beats `no cars`. (GPT Image 2 and Nano Banana both reward this; none of these models use video-style negative-prompt blocks.)

### Text in Images
Put literal copy in **quotes** (or ALL CAPS for GPT Image 2), name the font, keep critical strings short. Ranking: **Ideogram 4.0 → Nano Banana Pro → GPT Image 2 / Seedream 5.0** for legibility.

### One Edit-Axis Per Pass
As with video editing: swap OR relight OR restyle, not all at once. Chain edits across passes; on Nano Banana Pro / GPT Image (ChatGPT) use conversational turns.

### Provenance & Watermarking
GPT Image 2 embeds **C2PA + SynthID**; Nano Banana embeds **SynthID** (visible sparkle dropped on API/AI Studio/Ultra). These are invisible/metadata — relevant when a downstream platform inspects provenance. Don't promise a "watermark-free" output where the model embeds an invisible one.

---

## Bridging Stills → Video (Stills-to-Motion Pipeline)

The production payoff: generate a **consistent first frame** in an image model, then drive motion with an I2V video model.

1. **Generate** a canonical character sheet / first frame at the video target's aspect ratio (**9:16 for vertical drama**) and 4K where supported.
2. **Hand off** to an image-to-video model as the first frame / reference.
3. **For I2V, describe motion and action only** — don't redescribe the still (true for Kling O1, Runway 4.5, Happy Horse, LTX First-Frame, etc.).

| Path | Pipeline |
|---|---|
| **Tightest same-vendor consistency** | **Seedream 5.0 → Seedance 2.0** (reference-to-video accepts up to 9 image refs, tagged `@Image1…`) |
| **Trained recurring character** | **FLUX.2 [dev] LoRA** → frames → any I2V model |
| **General first-frame** | Any image model (4K, 9:16/16:9) → Kling O1 I2V · Runway 4.5 · Veo 3.1 · Happy Horse · Hailuo · LTX First-Frame · Pika I2V · Gemini Omni |
| **Maskless iterate-then-animate** | Nano Banana Pro (refine still conversationally) → I2V |

**Match the aspect ratio** between still and video, and keep the same character reference set across both stages.

---

## Model Reference Table (US-availability · pricing · specs)

Quick decision aid. **US-availability is load-bearing for American-market production** — several top models are US-excluded and must be reached via API resellers. Pricing drifts; verify on the provider at use time. Last web-verified **2026-06-19**.

### Video Models

| Model (vendor) | US? | Indicative price | Native res | Duration | Audio |
|---|---|---|---|---|---|
| **Seedance 2.5 / 2.0** (ByteDance) | ❌ excluded — 2.0 via fal.ai / WaveSpeed / Dreamina / CapCut (intl); **2.5 live in Jimeng AI + Doubao Pro since Jul 31, 2026** (China-first), **BytePlus ModelArk API Aug 7, 2026**; CapCut/fal pending | 2.0: $0.3024/s (720p) · **$0.1814/s w/ video input**; 2.5 pricing TBA | 480/720/1080p (**2.5: native 4K**) | 4–15s (**2.5: up to 30s, ~3 min beta**) | native + lip-sync |
| **Kling O1** (Kuaishou) | ⚠️ via resellers (fal) | Edit ~$0.168/s (EvoLink snapshot $0.111/s) | 720/1080p | 5–10s | — |
| **Kling 3.0** (Kuaishou) | ⚠️ via resellers | verify per provider | up to **4K@60fps** | 3–15s | native, multi-lang lip-sync |
| **Veo 3.1** (Google) | ✅ yes (Gemini / Vertex) | usage-based (Gemini/Vertex) | 720/1080p → 4K upscale | 4/6/8s | native |
| **Runway 4.5** (Runway) | ✅ yes | usage-based | up to 4K | 5–10s | native + lip-sync (May 2026) |
| **Happy Horse 1.0** (Alibaba) | ⚠️ via fal | 720p $0.179/s · 1080p $0.318/s | 720/1080p | 5–10s (edit 3–15s) | native + multilingual lip-sync |
| **Gemini Omni** (Google) | ✅ yes | usage-based | 720/1080p/**4K** | 4/8/12s | native |
| **LTX-2.3** (Lightricks) | ✅ yes — **open weights** | free self-host / fal per-use | up to **4K@50fps** | up to **20s** | native |
| **Hailuo H3 / 3.0** (MiniMax) | ✅ Hailuo AI app · MiniMax Hub · MiniMax Open Platform API · OpenRouter | ~$0.13/s (OpenRouter); MiniMax claims 2K < ⅓ of rivals, 768p < ½ of rivals' 720p | **native 2K** (1440p short edge) or 768p, 24fps | **5–15s** | **native stereo** (joint voice/SFX/music) + voice cloning |
| **Hailuo 2.3** (MiniMax) | ⚠️ via resellers / fal | usage-based | 1080p | 6s (10s @768p) | native |
| **Pika 2.5** (Pika) | ✅ yes | usage-based | 1080p | 5s (**Pikaframes 25s**) | SFX auto-match |

### Image Models

| Model (vendor) | US? | Indicative price/image | Max res | Notable |
|---|---|---|---|---|
| **GPT Image 2** (OpenAI) | ✅ yes | low ~$0.005 · med ~$0.04 · high ~$0.18 | ≤3840px (4K-class) | best prompt adherence; C2PA+SynthID; no transparency |
| **Nano Banana Pro** (Google) | ✅ yes | ~$0.134 (1–2K) · ~$0.24 (4K) | native 4K (~16MP) | maskless conversational edit; 14 refs; best text |
| **Seedream 5.0** (ByteDance) | ✅ not US-restricted (Dreamina/fal) | 5.0 Lite ~$0.035 (4K incl.) | native 4K | same-vendor → Seedance 2 I2V handoff |
| **FLUX.2** (Black Forest Labs) | ✅ yes — **[dev] open weights** | [pro] ~$0.045 @1080p · [dev] self-host | edit up to 4MP | only LoRA-trainable character here ([dev] non-commercial) |
| **Midjourney V8.1** | ✅ yes | subscription $10–120/mo | 2K native (`--hd`) | look-dev; `--oref` character lock; no API automation |
| **Ideogram 4.0** | ✅ yes — **open weights** | sub $7–42/mo · API $0.03–0.10 | 2K native | best-in-class text/typography; transparency; JSON layout |

---

## Usage

When invoked, ask the user (if not specified):
1. **Video or still image?** (Then which model — or "best fit," or "all video / all image.")
2. Scene description / character / emotional beat?
3. Ratio (9:16 / 16:9 / 1:1 / 4:3 / 3:4 / 21:9 where supported)?
4. **New generation** or **editing an existing asset?**
   - *Video edit* → Seedance 2 Edit / O1 Edit / Happy Horse Edit / Gemini Omni chat-edit / Pikaswaps-Pikadditions-Pikaffects / Runway audio-edit.
   - *Image edit* → GPT Image 2 (mask/`input_fidelity`) / Nano Banana Pro (maskless conversational) / Seedream SeedEdit / FLUX.2 (or Kontext) / Midjourney Vary Region / Ideogram.
5. Is this a **standalone still**, a **character reference sheet**, or a **first frame to seed image-to-video?** (If seeding I2V, see *Bridging Stills → Video* and match the video model's aspect ratio.)
6. If editing/stitching video: object swap, character insertion, restyle, camera-motion transfer, iterative chat-edit, keyframe stitching (Pikaframes), video extension (Seedance 2 Extension / Kling O1), or audio-only edit?

Then output the prompt(s) in the model's exact native format, ready to paste directly into the model's interface.

---

## Updates (2026-07-26)

Web-verified 2026-07-31.

- **2026-07-31 — MATERIAL #1: Hailuo H3 / 3.0 (MiniMax) RELEASED — major version bump 2.3 → 3.0.** MiniMax **officially launched H3 on July 31, 2026** (minimax.io research blog; Reuters; Bloomberg). **This overturns a standing assertion in this skill and in the weekly task file** — both previously stated "Hailuo 2.3 is the latest; Hailuo 3.0 does not exist / is unreleased roadmap" (see the 2026-06-16 correction below). That was accurate when written; **it is now obsolete**. H3 is a **general-purpose omni-modal generation model**: one pipeline that jointly understands *and* generates text, images, video, and audio. **Specs:** **5–15s**, **native 2K** (1440p short edge) or 768p, **24fps** fixed, **six aspect ratios** (21:9, 16:9, 4:3, 1:1, 3:4, 9:16), **native stereo audio** with voice/SFX/music modeled *jointly* (not as separate tracks), plus **voice cloning/transfer**. **Modes:** T2V, I2V, first-and-last-frame, omni-reference, **V2V motion transfer**, **instruction-based editing**, T2A, image reference/editing, and **natively-modeled multi-shot** with character consistency across shots. **Omni-reference budget:** up to **9 images + 3 videos + 3 audio = 12 files**; reference video/audio **2–15s each, 15s total**; **audio cannot travel alone** (must accompany an image or video). **Pricing:** ~**$0.13/s** via OpenRouter; MiniMax claims 2K costs **under a third** of mainstream rivals and 768p **under half** of rivals' 720p — the cheapest 2K tier in this skill. **US-accessible** via Hailuo AI app, MiniMax Hub, MiniMax Open Platform API, and OpenRouter — a genuine availability *gain* versus the reseller-only Hailuo 2.3 row. MiniMax has committed to **opening the model weights** shortly after launch, which would make H3 the second open-weight video model here alongside LTX-2.3. **Hailuo 2.3 retained** in the Model Reference Table as the cheap/fast 1080p draft tier. Sections updated: intro model list, Quick-Pick (3 rows), full Hailuo section rewrite (header, Version Note, Core Formula, new Omni-Reference input-budget table, Modes & I/O, Style Vocabulary, Strengths, What to AVOID, second worked example for omni-reference), Duration Matching, **Editing Existing Footage (now six routes — H3 added for motion transfer + instruction editing)**, Model Reference Table (new H3 row). *Note: the scheduled-task file's tracked-model line still reads "**Hailuo 2.3** (MiniMax — NOT '3.0'; 3.0 is unreleased roadmap)" — that line is now factually stale and should be corrected to "Hailuo H3 (3.0)" on the next task edit; the task file is out of this run's file scope.*
- **2026-07-31 — MATERIAL #2: Seedance 2.5 (ByteDance) shipped to consumers — availability change.** Last cycle (2026-07-24) recorded 2.5 as API/enterprise-beta only with Dreamina/Jimeng "coming soon". **As of July 31, 2026 Seedance 2.5 is live in Jimeng AI and Doubao Pro** (Video Generation → select Seedance 2.5), and the **BytePlus ModelArk API opens August 7, 2026** (seed.bytedance.com blog; Bloomberg). Consumer apps remain **China-first / US-excluded** and CapCut + fal.ai reseller support are still not live, so **Seedance 2.0 via fal.ai remains the practical US route** for now. Official spec detail also firmed up: the "up to 50 reference inputs" figure resolves to **30 images + 10 video clips + 10 audio clips per pass**, alongside **timestamp-level targeted editing** of audio and video, **green-screen editing**, and **camera-perspective adjustment**. Sections updated: Seedance Availability & Version Note, Quick-Pick multimodal row, Model Reference Table. Notably, MiniMax and ByteDance shipped **within hours of each other** on July 31 — Bloomberg framed it as "dueling AI video models".
- **Logged but NON-MATERIAL this cycle:** (1) **Seedream 5.0 Pro** (ByteDance, July 8) — adds deep-thinking prompt reasoning, real-time web search, layer editing, and 10+ language text to the already-tracked Seedream 5.0 line. A **variant tier**, not a version bump — treated like Kling 3.0 Turbo; canonical image roster unchanged. Also newly resold via the **Runway API** (5.0 Lite + 5.0 Pro, text-to-image with multi-image fusion) — reseller availability, not a capability change. (2) **Meta Muse Image** (July 7) — launched in Meta AI/Instagram/WhatsApp then **pulled from Instagram within days** over consent/privacy backlash (anyone could generate images from any public account's photos by tagging it); outside the canonical 6-image roster, and now partially withdrawn — logged, not added. **Meta Muse Video** remains preview-only. (3) **Runway API** added optional `negativePrompt` (≤1,000 chars) for Veo3/Veo3.1/Veo3.1_fast T2V and I2V — an API convenience on a third-party-hosted model, no Runway model change. (4) **Kling** remains 3.0 / 3.0 Turbo; **Veo** remains 3.1 (**no Veo 4** — re-verified, Gemini Omni is the separate parallel lineage); **Runway** remains Gen-4.5 (no Gen-5); **LTX** remains 2.3; **Happy Horse** remains 1.1 (logged non-material 2026-07-24); **Pika** remains 2.5; **Gemini Omni** unchanged — all re-verified. (5) GPT Image 2, Nano Banana Pro, FLUX.2, Midjourney V8.1, Ideogram 4.0 — no launches or version bumps this window. *Standing drift note: PR #3 (`bb4eba4`, the 2026-06-16 Hailuo fix) and PR #4 (2026-07-24 Seedance 2.5) are both still **open and unmerged**, so `origin/main`'s apps carry neither. This cycle's Hailuo rewrite supersedes PR #3's Hailuo portion outright — the old "multi-backbone routing" text is replaced with real H3 content.*
- **2026-07-24 — MATERIAL: Seedance 2.5 (ByteDance).** ByteDance announced **Seedance 2.5** on June 23, 2026 at the Volcano Engine FORCE conference — the new flagship of the unified multimodal Seedance line. **Headline capability jumps over 2.0:** native **30-second single-pass clips** (up from 4–15s) with a **~3-minute beta long-video mode**, **native 4K**, **up to 50 multimodal reference inputs** in one call (up from 12), and **local "re-draw" region editing** that fixes part of a frame while preserving performance/lighting/untouched areas. **Availability (as of 2026-07-24):** rolling out via **Volcano Engine / BytePlus (Model Ark) API** first; **Dreamina/Jimeng** consumer access still shows "coming soon", and **CapCut** + **fal.ai** reseller support are not yet live — so **Seedance 2.0 remains the currently-accessible tier via fal.ai**. Prompt craft (cinematic prose + `@Image/@Video/@Audio` tokens) is **identical across 2.0 and 2.5**, so existing prompts work for both. Still US-excluded via Dreamina/CapCut; 2.5 adds an expanded copyright-licensing layer. Skill sections updated: intro model list, Quick-Pick (drama + multimodal rows), section header → "Seedance 2.5 / 2.0", Availability & Version Note, Modes & I/O (Output duration/res), Duration Matching, Model Reference Table. Companion apps updated to Seedance 2.5 in the same cycle (index.html + prompt-lab.html + vid-prompt-studio.html — PR opened). **Logged but NON-material this cycle:** (1) **HappyHorse 1.1** (Alibaba, June 23) — a quality/consistency point release (motion dynamics, subject consistency, prompt adherence, audio) with **no new resolution/duration/reference capability or availability change** — treated like prior point releases; Happy Horse section left unchanged. (2) **Meta Muse Video** (July 7) — **preview only, not publicly available** ("coming soon to creators and in Meta AI"); Meta flags audio-sync + fast-motion gaps; debuted #3 on Arena T2V. Watch item — not added until it ships usable. Meta **Muse Image** did launch (US, via Meta AI/Instagram/WhatsApp) but sits outside the canonical 6-image roster — logged, not added. (3) **Kling AI** raised ~$3B (July) — business/funding news, no model or capability change. (4) Runway remains Gen-4.5 (no Gen-5); Veo remains 3.1 (no Veo 4); LTX remains 2.3; Hailuo remains 2.3; Pika remains 2.5 — all re-verified. *Known drift (follow-up, not this PR): the companion apps' Hailuo entry still reads "Hailuo 3.0" with legacy multi-backbone routing — the 2026-06-16 skill correction's app propagation (PR #3 / `bb4eba4`) is not in `main`.*
- **2026-06-19**: web-verified, no material changes this cycle. Scanned the past 7 days across all 10 tracked video models (Runway, Veo, Kling, Seedance, Happy Horse, Gemini Omni, LTX, Hailuo, Pika) + all 6 image models (GPT Image 2, Nano Banana Pro, Seedream 5.0, FLUX.2, Midjourney V8.1, Ideogram 4.0) plus video & image entrant sweeps (~60 sources). No new model launches, major version bumps, headline capability changes, deprecations, US-availability shifts, or >20% pricing drift. **Logged but non-material:** (1) **Kling 3.0 Turbo** launched June 17, 2026 — a speed/cost-optimized *fast-preview tier* of the existing Kling 3.0 line (multi-shot up to 6 shots, 720p/1080p, ~¥0.8/s ≈ $0.11 720p · ¥1/s ≈ $0.14 1080p), but **no native audio/lip-sync** (those stay with full Kling 3.0 / Omni) — a tier addition, not a version bump or capability change, treated like prior Fast/Lite tiers. (2) **LTX Trainer** (Lightricks, June 17) — a 13-mode LoRA/fine-tune trainer for LTX-2 (tooling, not a model change). (3) **Nano Banana Pro** reached GA in June at the already-tracked $0.134 price. (4) MiniMax **M3.0** (June) is a language model, not a Hailuo video model — Hailuo 2.3 remains the latest released video model. (5) FLUX.2 [klein] ASUS ProArt optimization (June 4) — partnership, non-material. Meta "Mango"/"Avocado" video/image models still unreleased.
- **2026-06-16 — CORRECTION: "Hailuo 3.0" → Hailuo 2.3 (factual fix).** Web re-verification (minimax.io, platform.minimax.io, scenario.com, theplanettools.ai) confirms the latest *publicly released* MiniMax video model is **Hailuo 2.3** (launched Oct 28, 2025) — **Hailuo 3.0 does not exist**. MiniMax has only signaled a next-gen "Hailuo 3" / "M3" generation for **H2 2026** (unreleased). The skill's prior "Hailuo 3.0" label (introduced with the LTX/Hailuo/Pika batch) was wrong and self-contradictory — the 2026-05-30 note already stated "Hailuo 2.3 remains the latest." All section content (director's-AI scripting, expanded stylization, ~30–90s gen, 6s sweet spot) describes real Hailuo 2.3 and was retained. Removed the unverified "multi-backbone routing to Seedream/Veo/Sora/Wan" claim (Sora 2 is deprecated; routing to competitors was unsupported) and replaced it with Hailuo 2.3's documented **Media Agent** multi-shot mode. Sections corrected: intro model list, Quick-Pick row, model header + Version Note, Modes & I/O, Style Vocabulary, Strengths, Duration Matching, Editing Existing Footage. The same Hailuo fix was propagated to all three companion apps (PR #3 / commit `bb4eba4`). Rest of skill (all other video models, all image models, Sora 2 deprecation) re-verified against current web — no other material change since 2026-06-14.
- **2026-06-16 — Added Model Reference Table.** New consolidated section before Usage: per-model **US-availability + indicative pricing + native res/duration + audio**, split video / image. Tuned for US-market cinematic short-form decisions (several top models — Seedance 2, Kling — are US-excluded or reseller-only).
- **2026-06-16 — App/skill image reconciliation (PR #3).** The companion apps had drifted from the skill's canonical 6 image models. `index.html` was missing GPT Image 2, Seedream 5.0, Ideogram 4.0; `prompt-lab.html` was missing Seedream 5.0, Ideogram 4.0; both refreshed FLUX.2 family + Midjourney V8.1. **`vid-prompt-studio.html` still has no image mode** (video-only) — building it (6 image generators + image form UI + mode toggle) is the remaining follow-up. The weekly scheduled task now tracks the 6 image models too.
- **2026-06-14 — MAJOR: still-image models added (skill upgraded to video + image).** New **Part 2 — Image Models** covers six leaders with native-format prompting, I/O, editing, and worked examples, plus a *Bridging Stills → Video* pipeline section for cinematic short-form (first-frame → I2V). Models added: **GPT Image 2** (OpenAI `gpt-image-2` / "ChatGPT Images 2.0", Apr 21 2026 — visual-reasoning, best prompt adherence, C2PA+SynthID, no transparency); **Nano Banana Pro** (Google `gemini-3-pro-image`, Nov 2025 — narrative prompting, maskless conversational editing, up to 14 refs / 5-character consistency, native 4K, SynthID); **Seedream 5.0** (ByteDance, ~Feb 2026 — up to 14 refs, native 4K, bilingual text, same-vendor Seedream→Seedance I2V handoff); **FLUX.2** (Black Forest Labs — pro/flex/**dev (32B open-weight, LoRA-trainable, non-commercial license)**/klein/Kontext; up to 10 refs, JSON + `@` multi-ref prompting); **Midjourney V8.1** (default since Jun 11 2026 — Omni Reference `--oref` replaced `--cref`, native 2K `--hd`, subscription-only); **Ideogram 4.0** (open-weight, Jun 3 2026 — best-in-class text/typography, JSON layout, transparency). Honorable mentions: **Reve**, **Recraft V4** (vector/SVG), **Qwen-Image 2.0** (open bilingual). Title retitled to "AI Video & Image Prompt Expert"; intro, Quick-Pick (now split Video/Image), and Usage updated. **Video side re-verified — no material change June 6–14** (only brand-new entrant: India's budget-focused **Varya** by Avataar.ai, Jun 12 — non-material for this skill). *Note: image coverage in the companion apps + weekly task was a pending follow-up here — resolved 2026-06-16 (see top entries): index/prompt-lab now carry the canonical 6 image models and the weekly task tracks them; vid-prompt-studio image mode remains the one open item.*
- **2026-06-05**: web-verified, no material changes this cycle. Scanned all tracked vendors (Runway, Veo, Kling, Seedance, Happy Horse, Gemini Omni, LTX, Hailuo, Pika) plus entrant sweep — no new launches, major version bumps, capability changes, deprecations, US-availability shifts, or >20% pricing drift detected. Runway remains Gen-4.5 (no Gen-5); Veo remains 3.1 (no Veo 4). The Alibaba "Happy Horse Awards" (Picsart, submissions close June 14) is a creator competition, not a model/capability change. Seedance 2.0 revenue-growth coverage (Volcano Engine MaaS target raise) is business news, not a product change.
- **2026-06-03 — Seedance 2 Edit + Extension capability added.** Seedance 2 is now a **unified multimodal model** that handles T2V, I2V, Reference-to-Video, **Edit**, and **Extension** in one architecture. The Reference-to-Video / Edit endpoint accepts up to **9 images + 3 videos + 3 audio clips + text in a single call** (max 12 files) — the widest multimodal reference window of any model in this skill. Reference tokens use `@Image1–9`, `@Video1–3`, `@Audio1–3`. **Edit operations:** character replacement, object replace/add/remove, background swap, attribute modification (hair, wardrobe, accessory), restyle, relight, "plot twist" alterations. **Preserved:** camera, lighting, timing, motion, untouched scene regions. **Caveat:** face/mouth/lip-sync is not explicitly documented as locked — for dialogue-critical edits, Kling O1 Edit and Happy Horse Edit remain safer. **Pricing (fal):** Edit/Reference jobs with a video input bill at $0.1814/s (40% off T2V) — the cheapest source-preserving edit in this skill. Source clips ≤ 15s per pass; output 4–15s. **Extension** continues an existing clip forward, optionally using `@Video2` as a motion-pattern reference. Skill sections updated: Seedance 2 (new Modes & I/O, Edit subsection, Extension subsection, worked examples), Editing Existing Footage (Seedance now first route in the comparison table), Duration Matching (Seedance Edit/Extension up to 15s), Quick-Pick Guide (Seedance added to edit row + new "multimodal reference" row), Usage routing question.
- **2026-05-30**: web-verified, no material changes this cycle. Scanned all tracked vendors (Runway, Veo, Kling, Seedance, Happy Horse, Gemini Omni, LTX, Hailuo, Pika) plus entrant sweep — no new launches, major version bumps, capability changes, deprecations, US-availability shifts, or >20% pricing drift detected. The Veo 3.1 Lite "announcement" surfaced in this week's results actually traces back to March 31, 2026 (already in family list). Hailuo 2.3 remains the latest publicly-released Hailuo per web sources.
- **Runway Gen-4.5 native audio shipped (May 2026)** — Gen-4.5 now generates synchronized dialogue, ambient bed, and SFX in a single pass alongside the video, with **automatic lip-sync via the GWM Avatars system**. Stable across extended conversations. Also adds **audio-only editing** of existing generated clips (swap SFX / bed / dialogue without re-rendering visuals). The old "no dialogue, Runway doesn't generate sync audio" caveat is **no longer accurate** — this skill's Runway section was rewritten accordingly.
- **LTX-2.3 (Lightricks, March 2026)** added to this skill. 22B-param DiT, open weights on HuggingFace (`Lightricks/LTX-2.3`), native synced audio, **up to 4K @ 50fps for 20-second clips** (longest in this skill). Distinctive **screenplay-format prompting** (`EXT./INT. LOCATION – TIME`, dialogue in quotes, camera embedded inline). Adds portrait 9:16 + 24/48 FPS. Hosted on fal.ai, WaveSpeed, RunDiffusion. LoRA-trainable.
- **Hailuo 2.3 (MiniMax)** in this skill. *(Originally added 2026-06-03 mislabeled as "Hailuo 3.0"; corrected to 2.3 on 2026-06-16 — see top entry.)* "Director's AI" script-style prompting, T2V/I2V + audio/music prompting, **fastest gen time in this skill (30–90s/clip)**. Media Agent multi-shot mode. Expanded stylization (anime, ink-wash, game-CG, illustration). MiniMax IPO'd Jan 2026.
- **Pika 2.5 added to this skill.** Distinctive non-mask edit suite: **Pikaframes** (2–5 keyframes → up to 25s @ 1080p, longest stitched clip here), **Pikaswaps** (object replacement), **Pikadditions** (insert characters/objects), **Pikaffects** (melt/explode/inflate creative physics), **Pikascenes**, **Pikaformance** (lip-sync on portraits), **PikaStream 1.0** (live Google Meet avatar). Integrated SFX generation auto-matches on-screen action.
- **Seedance 2 availability** — global rollout paused March 2026 (Hollywood copyright pressure), resumed April after mandatory invisible watermarking. **US excluded.** Reachable via fal.ai API, Dreamina, or CapCut in BR/MX/ID/MY/PH/TH/VN/+. Mainland China most stable. Topped Artificial Analysis T2V leaderboard (1993 arena score) but **not freely accessible in the US** — this skill now notes this up-front in the Seedance section.
- **Sora 2 (OpenAI) deprecated April 26, 2026** — full shutdown Sept 24, 2026 (API rolls off same date). Removed from active recommendations; do not propose Sora-targeted prompts. Sora was never in this skill, so no removal needed.
- **Gemini Omni Flash (May 19, 2026)** — added in previous revision; details still accurate. Multimodal text+image+audio+video → video with persistent-scene-memory iterative editing, native 4K, six aspect ratios, durations 4/8/12s, SynthID watermark.
- **Kling 3.0 (Feb 4, 2026)** — duration window 3–15s, native lip-sync (ZH/EN/JA/KO/ES), AI Director, Video 3.0 Omni multi-shot storyboard, native 4K + in-frame text. Unchanged.
- **Happy Horse 1.0** — fal endpoints live since Apr 27, 2026. Per-second pricing: 720p $0.179/s, 1080p $0.318/s. Topped AA T2V leaderboard April 2026 (since overtaken by Seedance 2.0 Fast in some categories).
- **Veo 3.1 (Jan 2026)** is the current Veo — **no Veo 4 yet** (Gemini Omni is a separate, parallel lineage). Family: Veo 3.1, Veo 3.1 Fast, Veo 3.1 Lite. "Ingredients to Video" reference flow, native 9:16, 1080p with upscale to 4K, video-extension beyond 8s base (preview).
- **Kling O1 Edit pricing drift** unchanged: fal lists $0.168/s; EvoLink snapshot (Apr 8, 2026) shows $0.111/s. Verify rate per provider.

Sources verified via web search 2026-05-30 + 2026-06-03: runwayml.com/changelog, ltx.io, huggingface.co/Lightricks/LTX-2.3, minimax.io, pika.art, blog.google (Gemini Omni), techcrunch.com, fal.ai (Seedance 2 reference-to-video endpoint docs), seedanceai.cc/capabilities/video-editing, opus.pro (Seedance edit/extend guide), wavespeed.ai, klingaio.com, kuaishou IR, seed.bytedance.com.

Sources verified 2026-07-31 (this cycle): minimax.io/blog/minimax-h3 (H3 launch + specs + pricing claims), Reuters via kfgo.com (H3 release, open-weights commitment, cost claim), bloomberg.com (MiniMax + ByteDance dueling July 31 releases), openrouter.ai/minimax/hailuo-3 (H3 live, ~$0.13/s), morphic.com/resources/models/minimax-h3 (aspect ratios, fps, input limits), seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5 (Seedance 2.5 official specs + Jimeng/Doubao rollout), techcrunch.com (Meta Muse Image launch + Instagram pullback), developers.openai.com/api/docs/changelog (GPT Image 2 — no change this window).
