PtDesigns — Back Alleys and Service Areas v1.0 (Town Environments)

48 static 2D isometric pixel-art environment tiles and modules. The back of
the block: alley asphalt with patches and stains, service concrete, brick
service paving, a storm drain, utility hatch and hazard strips; brick and
plaster service walls plus cracked brick; roller-shutter loading doors (open
and closed halves), personnel doors and barred windows; pipe panels, louvre
vents and bulkhead lights; chain-link fence and service gate; low brick walls;
a raised loading dock with edge strips and steps; a flat metal roof with a
large roof vent and a downpipe.

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
- tiles/ — 48 PNGs named by piece (ground 10, wall 8, loading_door 8,
  wall_fixture 7, boundary 4, door 2, low_wall 2, steps 2, edge 2, platform 1,
  roof 1, roof_fixture 1).
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
- examples/ — 3 example layouts built only from this pack's tiles (back alley,
  loading bay, service enclosure): a PNG render plus a JSON file listing every
  piece, its grid cell and its screen position in painter's order. Use them as
  placement references.
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

- Walls run from z=12 to z=268. Pair the left then right roller-shutter halves
  along their named axis for a 3 m wide bay. Open halves have transparent
  openings; closed halves are opaque.
- Pipe panels, vents and lamps are overlays mounted at a wall's origin, with
  the same offset as that wall.
- The loading dock surface is at z=48. Shift wall modules, roofs and wall
  fittings up 36 px so their z=12 base meets the dock (the loading_bay example
  records these shifts). Loading steps descend from their near z=48 edge to
  the ground across the named axis. Dock-edge strips cover the last 0.1 tile
  along the relevant edge.
- Fence and low-wall pieces use ground z=0. The flat metal roof sits at z=268
  before any offset.

PIECES
  No.  name                          category      z(px)  approx. size (m)
  01   alley_asphalt                 ground        0      1.5×1.5×0.01
  02   asphalt_patch                 ground        0      1.5×1.5×0.01
  03   service_concrete              ground        0      1.5×1.5×0.01
  04   service_concrete_worn         ground        0      1.5×1.5×0.01
  05   brick_service_paving          ground        0      1.5×1.5×0.01
  06   storm_drain                   ground        0      1.5×1.5×0.01
  07   utility_hatch                 ground        0      1.5×1.5×0.01
  08   hazard_strip_u                ground        0      1.5×1.5×0.01
  09   hazard_strip_v                ground        0      1.5×1.5×0.01
  10   asphalt_stain                 ground        0      1.5×1.5×0.01
  11   service_wall_brick_u          wall          12     1.5×1.5×2.58
  12   service_wall_brick_v          wall          12     1.5×1.5×2.58
  13   service_wall_plaster_u        wall          12     1.5×1.5×2.58
  14   service_wall_plaster_v        wall          12     1.5×1.5×2.58
  15   personnel_door_u              door          12     1.5×1.5×2.59
  16   personnel_door_v              door          12     1.5×1.5×2.59
  17   roller_closed_left_u          loading_door  12     1.5×1.5×2.58
  18   roller_closed_left_v          loading_door  12     1.5×1.5×2.58
  19   roller_closed_right_u         loading_door  12     1.5×1.5×2.59
  20   roller_closed_right_v         loading_door  12     1.5×1.5×2.59
  21   roller_open_left_u            loading_door  12     1.5×1.5×2.58
  22   roller_open_left_v            loading_door  12     1.5×1.5×2.58
  23   roller_open_right_u           loading_door  12     1.5×1.5×2.59
  24   roller_open_right_v           loading_door  12     1.5×1.5×2.59
  25   barred_window_u               wall          12     1.5×1.5×2.58
  26   barred_window_v               wall          12     1.5×1.5×2.58
  27   cracked_brick_wall_u          wall          12     1.5×1.5×2.58
  28   cracked_brick_wall_v          wall          12     1.5×1.5×2.58
  29   chainlink_fence_u             boundary      0      1.5×1.5×1.73
  30   chainlink_fence_v             boundary      0      1.5×1.5×1.73
  31   service_gate_u                boundary      0      1.5×1.5×1.83
  32   service_gate_v                boundary      0      1.5×1.5×1.83
  33   low_brick_wall_u              low_wall      0      1.5×1.5×0.98
  34   low_brick_wall_v              low_wall      0      1.5×1.5×0.98
  35   pipe_panel_u                  wall_fixture  0      1.5×1.5×1.62
  36   pipe_panel_v                  wall_fixture  0      1.5×1.5×1.62
  37   vent_louver_u                 wall_fixture  0      1.5×1.5×0.8
  38   vent_louver_v                 wall_fixture  0      1.5×1.5×0.8
  39   bulkhead_light_u              wall_fixture  0      1.5×1.5×0.37
  40   bulkhead_light_v              wall_fixture  0      1.5×1.5×0.37
  41   loading_steps_u               steps         0      1.5×1.5×0.49
  42   loading_steps_v               steps         0      1.5×1.5×0.49
  43   loading_dock                  platform      48     1.5×1.5×0.49
  44   dock_edge_u                   edge          48     1.5×1.5×0.47
  45   dock_edge_v                   edge          48     1.5×1.5×0.49
  46   metal_roof_flat               roof          268    1.5×1.5×0.01
  47   large_roof_vent               roof_fixture  268    1.5×1.5×0.97
  48   service_downpipe              wall_fixture  0      1.5×1.5×2.49

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
- Lamps do not emit light; no shutter animation and no vehicles.
- Cracked brick and worn concrete are subtle variants of the plain versions,
  to break up repetition.
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
