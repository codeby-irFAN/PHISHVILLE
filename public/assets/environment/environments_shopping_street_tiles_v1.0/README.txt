PtDesigns — Shopping Street v1.0 (Town Environments)

52 static 2D isometric pixel-art environment tiles and modules. A high-street
kit: asphalt road with dashed lines, crossings, patches and drains; raised
concrete sidewalk with curbs and tactile paving; grass with edge strips; brick
paving; plaster, brick and timber shop walls; storefront windows and doors;
striped awnings and blank signs; corner posts and downpipe; flat and pitched
slate roofs with half-gables, eave gutters, chimney and roof vent.

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
- tiles/ — 52 PNGs named by piece (ground 18, storefront 8, wall 6, roof 5,
  gable 4, corner 2, awning 2, roof_trim 2, sign 2, roof_fixture 2, fixture
  1).
- atlas.png — all pieces in one sheet (2304×4608), in 384×512 cells.
- manifest.json — grid, anchor, world scale, and per piece: file, category,
  orientation, elevation_px, atlas_rect [x, y, w, h] (top-left origin),
  scale_factor, approximate real size in metres, sha256.
- asset_index.csv — the same data as a spreadsheet.
- materials/ — 9 seamless 256×256 material swatches used by the pack, with a
  small manifest; source/material_atlas.png is the sheet they come from.
- previews/ — contact sheets on dark and light backgrounds. Each piece is
  enlarged for viewing by the whole-number nearest-neighbour factor shown in
  its cell; the tile files are at true scale. The _2x sheets use bigger cells.
- examples/ — 3 example layouts built only from this pack's tiles (corner
  shop, roof modules, shopping row): a PNG render plus a JSON file listing
  every piece, its grid cell and its screen position in painter's order. Use
  them as placement references.
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

- Sidewalks and brick (clay) paving sit 12 px above the road. curb_u finishes
  the v=1 edge (runs along u); curb_v finishes the u=1 edge (runs along v);
  curb_outer_corner finishes both visible edges. Plain sidewalk has no side
  faces, so finish every exposed sidewalk edge with curbs.
- Dashed-road and crossing names give the tile's world axis. They are straight
  segments; patches and drains sit inside the asphalt boundary.
- u faces run from (0,0) to (1,0); v faces from (0,0) to (0,1). Storefront
  walls, doors and windows share the plaster wall endpoints. Corner posts are
  overlays covering a u/v junction, not extra walls. Awnings and signs overlay
  a wall module at the same cell. Doors are part of their wall modules; open
  doorways have a transparent opening, glass is painted opaque.
- Walls run from z=12 to z=268. Flat roofs sit at z=268 on the building
  footprint; eave/gutter overlays go on the exposed low edges; chimney and
  vent are for flat-roof height.
- Two-cell gable along u: slate_roof_rise_u at (u,v) and slate_roof_fall_u at
  (u+1,v); both edges meet at z=332 (64 px rise). Repeat the pair along v. The
  v version uses rise_v then fall_v at adjacent v cells. Half-gables fill the
  64 px triangle above the end wall: draw them after the wall and before the
  roof planes. The roof_modules example shows both assemblies.

PIECES
  No.  name                          category      z(px)  approx. size (m)
  01   asphalt_plain                 ground        0      1.5×1.5×0.01
  02   asphalt_patch                 ground        0      1.5×1.5×0.01
  03   road_dashed_u                 ground        0      1.5×1.5×0.01
  04   road_dashed_v                 ground        0      1.5×1.5×0.01
  05   crosswalk_u                   ground        0      1.5×1.5×0.01
  06   crosswalk_v                   ground        0      1.5×1.5×0.01
  07   road_drain                    ground        0      1.5×1.5×0.01
  08   sidewalk_plain                ground        12     1.5×1.5×0.01
  09   sidewalk_worn                 ground        12     1.5×1.5×0.01
  10   sidewalk_tactile              ground        12     1.5×1.5×0.01
  11   curb_u                        ground        12     1.5×1.5×0.13
  12   curb_v                        ground        12     1.5×1.5×0.13
  13   curb_outer_corner             ground        12     1.5×1.5×0.13
  14   brick_paving                  ground        12     1.5×1.5×0.01
  15   brick_paving_worn             ground        12     1.5×1.5×0.01
  16   grass_plain                   ground        0      1.5×1.5×0.01
  17   grass_edge_u                  ground        0      1.5×1.5×0.01
  18   grass_edge_v                  ground        0      1.5×1.5×0.01
  19   wall_brick_u                  wall          12     1.5×1.5×2.58
  20   wall_brick_v                  wall          12     1.5×1.5×2.58
  21   wall_plaster_u                wall          12     1.5×1.5×2.58
  22   wall_plaster_v                wall          12     1.5×1.5×2.58
  23   wall_wood_u                   wall          12     1.5×1.5×2.58
  24   wall_wood_v                   wall          12     1.5×1.5×2.58
  25   storefront_window_u           storefront    12     1.5×1.5×2.58
  26   storefront_window_v           storefront    12     1.5×1.5×2.58
  27   storefront_glass_door_u       storefront    12     1.5×1.5×2.59
  28   storefront_glass_door_v       storefront    12     1.5×1.5×2.59
  29   storefront_solid_door_u       storefront    12     1.5×1.5×2.59
  30   storefront_solid_door_v       storefront    12     1.5×1.5×2.59
  31   storefront_open_doorway_u     storefront    12     1.5×1.5×2.59
  32   storefront_open_doorway_v     storefront    12     1.5×1.5×2.59
  33   corner_post_brick             corner        12     1.5×1.5×2.69
  34   corner_post_wood              corner        12     1.5×1.5×2.69
  35   striped_awning_u              awning        0      1.5×1.5×0.97
  36   striped_awning_v              awning        0      1.5×1.5×0.97
  37   slate_roof_flat               roof          268    1.5×1.5×0.01
  38   slate_roof_rise_u             roof          268    1.5×1.5×0.64
  39   slate_roof_fall_u             roof          268    1.5×1.5×0.64
  40   slate_roof_rise_v             roof          268    1.5×1.5×0.64
  41   slate_roof_fall_v             roof          268    1.5×1.5×0.64
  42   eave_gutter_u                 roof_trim     268    1.5×1.5×0.09
  43   eave_gutter_v                 roof_trim     268    1.5×1.5×0.1
  44   corner_downpipe               fixture       0      1.5×1.5×2.41
  45   blank_shop_sign_u             sign          0      1.5×1.5×0.23
  46   blank_shop_sign_v             sign          0      1.5×1.5×0.23
  47   brick_chimney                 roof_fixture  268    1.5×1.5×1.15
  48   roof_vent                     roof_fixture  268    1.5×1.5×0.65
  49   gable_half_rise_u             gable         268    1.5×1.5×0.66
  50   gable_half_fall_u             gable         268    1.5×1.5×0.66
  51   gable_half_rise_v             gable         268    1.5×1.5×0.65
  52   gable_half_fall_v             gable         268    1.5×1.5×0.65

USING IN GODOT 4
Tested in Godot 4.7.2 (headless import): all 52 pieces and the 9 material
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
- No four-way junction, ramps, driveways or inner curb turns; grass-to-paving
  strips are single-edge variants, not a full autotile set.
- No hip, valley, dormer or other roof pitches.
- Signs are deliberately blank; windows have no interior behind them.
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
- Shopping row example: added a missing curb piece under the tactile paving
  cell.

PtDesigns
