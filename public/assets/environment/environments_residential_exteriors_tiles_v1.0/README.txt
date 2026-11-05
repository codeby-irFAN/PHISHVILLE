PtDesigns — Residential Exteriors v1.0 (Town Environments)

48 static 2D isometric pixel-art environment tiles and modules. House
exteriors and front gardens: flagstone, driveway gravel, lawn with path
pieces, an oak porch deck and raised entry paving; brick, plaster and timber
house walls; sash windows, bay windows and entry doors; two-part garage doors;
entry steps, porch railings, canopies and porch posts; garden fence and gate;
flat and pitched roofs with half-gables, corner trim and a chimney.

Designed by PtDesigns, Packaged with AI tools. Released under CC0 1.0 (see
LICENSE.txt) — free for personal and commercial use, no attribution required.

WHAT THESE ARE (AND ARE NOT)
- Modular isometric tiles: ground tiles, wall and roof modules, and overlays
  (doors, awnings, fences, fittings) that snap to one shared 256×128 diamond
  grid.
- Every piece is a 384×512 transparent PNG (RGBA) with the same anchor point
  (192,352). Pieces are not trimmed, so they all line up with one formula.
- Shared world scale: 256×128 px floor tile = 1.5 m per tile edge, 100 px per
  metre of height. This matches the PtDesigns Household props, and the Cozy
  Shops Foundations tiles drawn at 2x.
- Not an automatic terrain (autotile) set and not animated: you place explicit
  modules.

CONTENTS
- tiles/ — 48 PNGs named by piece (ground 10, wall 6, house_front 6, boundary
  6, roof 5, garage 4, gable 4, steps 2, post 2, canopy 2, roof_fixture 1).
- atlas.png — all pieces in one sheet (3072×3072), in 384×512 cells.
- manifest.json — grid, anchor, world scale, and per piece: file, category,
  orientation, elevation_px, atlas_rect [x, y, w, h] (top-left origin),
  scale_factor, approximate real size in metres, sha256.
- asset_index.csv — the same data as a spreadsheet.
- materials/ — 9 seamless 256×256 material swatches used by the pack, with a
  small manifest; source/material_atlas.png is the sheet they come from.
- previews/ — contact sheets on dark and light backgrounds. Each piece is
  enlarged for viewing by the whole-number nearest-neighbour factor shown in
  its cell; the tile files are at true scale. The _2x sheets use bigger cells.
- examples/ — 3 example layouts built only from this pack's tiles (gable
  cottage, house and garage, house and garden): a PNG render plus a JSON file
  listing every piece, its grid cell and its screen position in painter's
  order. Use them as placement references.
- LICENSE.txt, README.txt.

PLACEMENT AND CONNECTIONS
A piece at grid cell (u, v) with height offset z is drawn with its anchor at
screen (origin_x + 128*(u-v), origin_y + 64*(u+v) - z); its top-left corner
goes at that point minus (192,352). +u moves (128,64) on screen and +v moves
(-128,64).
For a rectangular building footprint [u0,u1]×[v0,v1], the camera-facing
u-oriented wall run sits on v=v1 and the v-oriented run on u=u1. Draw ground
first, then walls with their attached overlays, then roofs; foreground fences
may overlay the result. Neighbouring pieces must match type and elevation
(finishes, raised surfaces, banks and overlays are explicit modules).

- Wall modules run from z=12 to z=268. Porch decks and entry paving are at
  z=12. Entry steps descend from their near z=12 edge to the ground across the
  named axis.
- Garage door halves are placed left then right along the named u/v axis,
  giving a 3 m wide opening.
- Bay windows project 0.19 tile out from the wall. Canopies project 0.55 tile
  with their front edge at z=218; porch posts support the front corners.
- Garden fences and rails use a ground base; shift them up 12 px when used on
  raised decking.
- Roofs use base z=268 and rise or fall 64 px over one tile. Pair rise_u with
  fall_u at the next u cell, or rise_v with fall_v at the next v cell.
  Matching half-gables close the visible ends. The chimney is for flat roofs.

PIECES
  No.  name                          category      z(px)  approx. size (m)
  01   flagstone                     ground        0      1.5×1.5×0.01
  02   flagstone_worn                ground        0      1.5×1.5×0.01
  03   drive_gravel                  ground        0      1.5×1.5×0.01
  04   drive_gravel_worn             ground        0      1.5×1.5×0.01
  05   garden_lawn                   ground        0      1.5×1.5×0.01
  06   oak_porch_deck                ground        12     1.5×1.5×0.13
  07   raised_entry_paving           ground        12     1.5×1.5×0.13
  08   lawn_path_u                   ground        0      1.5×1.5×0.01
  09   lawn_path_v                   ground        0      1.5×1.5×0.01
  10   lawn_path_corner              ground        0      1.5×1.5×0.01
  11   house_wall_brick_u            wall          12     1.5×1.5×2.58
  12   house_wall_brick_v            wall          12     1.5×1.5×2.58
  13   house_wall_plaster_u          wall          12     1.5×1.5×2.58
  14   house_wall_plaster_v          wall          12     1.5×1.5×2.58
  15   house_wall_wood_u             wall          12     1.5×1.5×2.58
  16   house_wall_wood_v             wall          12     1.5×1.5×2.58
  17   house_sash_u                  house_front   12     1.5×1.5×2.58
  18   house_sash_v                  house_front   12     1.5×1.5×2.58
  19   house_bay_u                   house_front   12     1.5×1.5×2.58
  20   house_bay_v                   house_front   12     1.5×1.5×2.58
  21   house_entry_u                 house_front   12     1.5×1.5×2.59
  22   house_entry_v                 house_front   12     1.5×1.5×2.59
  23   garage_half_left_u            garage        12     1.5×1.5×2.58
  24   garage_half_left_v            garage        12     1.5×1.5×2.58
  25   garage_half_right_u           garage        12     1.5×1.5×2.59
  26   garage_half_right_v           garage        12     1.5×1.5×2.58
  27   entry_steps_u                 steps         0      1.5×1.5×0.13
  28   entry_steps_v                 steps         0      1.5×1.5×0.13
  29   porch_railing_u               boundary      0      1.5×1.5×0.81
  30   porch_railing_v               boundary      0      1.5×1.5×0.81
  31   garden_fence_u                boundary      0      1.5×1.5×0.99
  32   garden_fence_v                boundary      0      1.5×1.5×0.99
  33   garden_gate_u                 boundary      0      1.5×1.5×1.07
  34   garden_gate_v                 boundary      0      1.5×1.5×1.07
  35   porch_post                    post          0      1.5×1.5×2.21
  36   house_corner_trim             post          0      1.5×1.5×2.69
  37   roof_flat                     roof          268    1.5×1.5×0.01
  38   roof_rise_u                   roof          268    1.5×1.5×0.64
  39   roof_fall_u                   roof          268    1.5×1.5×0.64
  40   roof_rise_v                   roof          268    1.5×1.5×0.64
  41   roof_fall_v                   roof          268    1.5×1.5×0.64
  42   gable_rise_u                  gable         268    1.5×1.5×0.65
  43   gable_fall_u                  gable         268    1.5×1.5×0.65
  44   gable_rise_v                  gable         268    1.5×1.5×0.65
  45   gable_fall_v                  gable         268    1.5×1.5×0.65
  46   porch_canopy_u                canopy        0      1.5×1.5×0.95
  47   porch_canopy_v                canopy        0      1.5×1.5×0.95
  48   house_chimney                 roof_fixture  268    1.5×1.5×1.15

USING IN GODOT 4
Tested in Godot 4.7.2 (headless import): all 48 pieces and the 9 material
swatches import, and every piece matches its atlas region pixel-for-pixel.
- Set Project Settings → Rendering → Textures → Default Texture Filter =
  Nearest; leave mipmaps off.
- Sprite2D: centered = false, offset = (-192, -352), so the node position is
  the piece's anchor; position each node with the placement formula above.
- TileSet: tile size 256×128, isometric (diamond) layout; use atlas.png with
  384×512 regions and set each tile's texture_origin so the anchor (192,352)
  sits on the cell centre. Height offsets (z) are a vertical texture_origin
  shift or a separate layer.
- Sorting: use Y-sort or follow the painter's order recorded in the example
  JSON files.
- Scale the whole scene by whole numbers only, for crisp pixels.

KNOWN LIMITATIONS
- No hip, valley or dormer pieces.
- Windows have no interior behind them.
- The worn flagstone and gravel variants are subtle changes (to break up
  repetition), not a different material.
- Real-world sizes in manifest.json are approximate (from the tile footprint
  and the tallest pixel column), for reference only.
- One viewpoint only: no rotations, collision shapes or occlusion rules;
  choose your own roof-hiding behaviour in a game.

QC APPLIED FOR V1.0
- Alpha cleaned: no semi-transparent haze; hidden RGB under fully transparent
  pixels zeroed (prevents halos when filtering).
- Canvas, anchor and grid checked for every piece; no clipping at canvas
  edges; atlas rebuilt and checked against every tile pixel-for-pixel;
  manifest, CSV and sha256 values cross-checked.
- No resizing: the pack was already at the shared world scale, so every piece
  is unchanged in size (scale_factor 1).
- PNG metadata chunks stripped from all images.

PtDesigns
