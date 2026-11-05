PtDesigns — Courtyards and Parks v1.0 (Town Environments)

48 static 2D isometric pixel-art environment tiles and modules. Public squares
and small parks: limestone, gravel, clay paving and lawn with path pieces; a
rectangular pond kit (centre, banks and corners); cedar and iron fences with
an arched gate; clipped hedges, raised planters, sandstone retaining walls and
steps; a pergola kit with posts, beams and lattice; a gazebo deck with
railings; arched trellises; a stone fountain; benches and a drain.

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
- tiles/ — 48 PNGs named by piece (ground 10, water_bank 8, boundary 6,
  landscape 6, pergola 3, steps 2, low_wall 2, post 2, railing 2, trellis 2,
  fountain 2, bench 2, water 1).
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
- examples/ — 3 example layouts built only from this pack's tiles (fountain
  square, pergola garden, pond courtyard): a PNG render plus a JSON file
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

- Pond centre is at z=0; banks are 12 px high. The suffix u0/u1/v0/v1 names
  the edge that has a bank; corner pieces combine two banks. Use a centre in
  the middle, edge modules on a rectangular perimeter and matching corners.
- Hedges are 72 px high; planter stone is 35 px with foliage above; retaining
  walls are 70 px. For raised terrain, shift a ground tile up by the needed z
  offset.
- Pergola posts reach z=220, beams occupy z=212..225 and the lattice reaches
  z=232; apply the same offset to all parts.
- The gazebo deck is at z=12, so posts, roof and railings placed on it shift
  up 12 px.
- Fountain basin and pedestal share one origin; the pedestal base meets the
  basin water at z=23.
- Pergola and hedge layouts follow the draw order in the example JSON files.

PIECES
  No.  name                          category      z(px)  approx. size (m)
  01   courtyard_limestone           ground        0      1.5×1.5×0.01
  02   courtyard_limestone_worn      ground        0      1.5×1.5×0.01
  03   park_gravel                   ground        0      1.5×1.5×0.01
  04   park_gravel_worn              ground        0      1.5×1.5×0.01
  05   park_lawn                     ground        0      1.5×1.5×0.01
  06   clay_paving                   ground        0      1.5×1.5×0.01
  07   lawn_path_u                   ground        0      1.5×1.5×0.01
  08   lawn_path_v                   ground        0      1.5×1.5×0.01
  09   pond_center                   water         0      1.5×1.5×0.01
  10   pond_bank_u0                  water_bank    0      1.5×1.5×0.13
  11   pond_bank_u1                  water_bank    0      1.5×1.5×0.01
  12   pond_bank_v0                  water_bank    0      1.5×1.5×0.13
  13   pond_bank_v1                  water_bank    0      1.5×1.5×0.01
  14   pond_corner_u0_v0             water_bank    0      1.5×1.5×0.13
  15   pond_corner_u0_v1             water_bank    0      1.5×1.5×0.13
  16   pond_corner_u1_v0             water_bank    0      1.5×1.5×0.13
  17   pond_corner_u1_v1             water_bank    0      1.5×1.5×0.01
  18   cedar_fence_u                 boundary      0      1.5×1.5×1.03
  19   cedar_fence_v                 boundary      0      1.5×1.5×1.03
  20   iron_fence_u                  boundary      0      1.5×1.5×1.19
  21   iron_fence_v                  boundary      0      1.5×1.5×1.19
  22   arched_iron_gate_u            boundary      0      1.5×1.5×1.49
  23   arched_iron_gate_v            boundary      0      1.5×1.5×1.49
  24   clipped_hedge_u               landscape     0      1.5×1.5×0.99
  25   clipped_hedge_v               landscape     0      1.5×1.5×0.99
  26   clipped_hedge_corner          landscape     0      1.5×1.5×0.99
  27   raised_planter_u              landscape     0      1.5×1.5×0.83
  28   raised_planter_v              landscape     0      1.5×1.5×0.83
  29   raised_planter_corner         landscape     0      1.5×1.5×0.83
  30   courtyard_steps_u             steps         0      1.5×1.5×0.13
  31   courtyard_steps_v             steps         0      1.5×1.5×0.13
  32   sandstone_retaining_wall_u    low_wall      0      1.5×1.5×0.89
  33   sandstone_retaining_wall_v    low_wall      0      1.5×1.5×0.89
  34   stone_boundary_pillar         post          0      1.5×1.5×1.17
  35   pergola_post                  post          0      1.5×1.5×2.29
  36   pergola_beam_u                pergola       0      1.5×1.5×0.22
  37   pergola_beam_v                pergola       0      1.5×1.5×0.22
  38   pergola_lattice_roof          pergola       0      1.5×1.5×1.3
  39   gazebo_deck                   ground        12     1.5×1.5×0.13
  40   gazebo_railing_u              railing       0      1.5×1.5×0.83
  41   gazebo_railing_v              railing       0      1.5×1.5×0.83
  42   arched_trellis_u              trellis       0      1.5×1.5×1.96
  43   arched_trellis_v              trellis       0      1.5×1.5×1.97
  44   stone_fountain_basin          fountain      0      1.5×1.5×1.49
  45   fountain_pedestal             fountain      0      1.5×1.5×1.06
  46   courtyard_bench_u             bench         0      1.5×1.5×1.31
  47   courtyard_bench_v             bench         0      1.5×1.5×1.31
  48   courtyard_drain               ground        0      1.5×1.5×0.01

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
- Rectangular ponds only (no rounded or concave shapes). Water and the
  fountain jet are static.
- No roofed gazebo.
- Worn paving variants are subtle changes to break up repetition.
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
