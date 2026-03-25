# Three.js / React Three Fiber Standards

## Architecture
- Single `<Canvas>` in root layout — never mount multiple canvases
- Use Zustand store to control which scene/objects are visible based on scroll position
- Canvas is a progressive enhancement — all critical content is in DOM
- Wrap all canvas content in `<Suspense>` with skeleton fallback

## Scene Organization
```
components/canvas/
├── CanvasProvider.tsx       # <Canvas> wrapper with global config
├── scenes/
│   ├── HeroScene.tsx        # Landing hero 3D experience
│   ├── NetworkScene.tsx     # Ethereum network visualization
│   └── CityScene.tsx        # Ankara skyline abstract
├── objects/
│   ├── EthLogo.tsx          # Animated ETH diamond
│   ├── Particles.tsx        # Ambient particle system
│   └── FloatingBlocks.tsx   # Blockchain block abstractions
├── materials/
│   ├── HolographicMaterial.tsx
│   ├── GlowMaterial.tsx
│   └── NoiseMaterial.tsx
├── effects/
│   ├── PostProcessing.tsx   # Bloom, chromatic aberration
│   └── Background.tsx       # Gradient/noise background
└── helpers/
    ├── CameraRig.tsx        # Scroll-linked camera movement
    ├── Lighting.tsx         # Scene lighting setup
    └── ResponsiveCamera.tsx # Viewport-aware camera
```

## Canvas Configuration
```tsx
<Canvas
  gl={{
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
    stencil: false,
    depth: true,
  }}
  dpr={[1, 2]}                // Clamp pixel ratio for performance
  camera={{ position: [0, 0, 5], fov: 45 }}
  style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
>
```

## Performance Rules
- `useMemo` ALL geometries and materials — never create inside JSX or useFrame
- Use `useFrame` for continuous animations — never setState inside animation loop
- Dispose resources in cleanup: `geometry.dispose()`, `material.dispose()`, `texture.dispose()`
- Max 3 real-time lights — use baked lighting where possible
- Total scene: < 100k triangles (hero), < 50k (background scenes)
- Use instancing (`<Instances>`) for repeated objects (particles, blocks)
- Implement LOD with Drei's `<Detailed>` for models visible at varying distances
- Texture compression: use KTX2/Basis format, max 2048x2048px
- Frame budget: < 16ms per frame (60fps target)

## Shader Workflow
```
shaders/
├── holographic.vert         # Vertex shaders
├── holographic.frag         # Fragment shaders
├── noise.glsl               # Shared noise functions
└── utils.glsl               # Shared utility functions
```
- Store shaders as .vert/.frag/.glsl files — never as template strings
- Configure webpack/Next.js to import GLSL files via glslify or raw-loader
- Use `shaderMaterial` from Drei for custom materials with R3F integration
- Uniforms: pass time via `useFrame`, pass scroll position via Zustand store

## Common Patterns

### Scroll-Linked Camera
```tsx
function CameraRig() {
  const scrollProgress = useStore((s) => s.scrollProgress)
  useFrame((state) => {
    state.camera.position.lerp(
      new THREE.Vector3(0, scrollProgress * -5, 5 - scrollProgress * 2),
      0.05
    )
    state.camera.lookAt(0, 0, 0)
  })
  return null
}
```

### Instanced Particles
```tsx
function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    // Update positions in useFrame, not in state
    particles.forEach((particle, i) => {
      dummy.position.set(particle.x, particle.y + Math.sin(state.clock.elapsedTime + i) * 0.1, particle.z)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#627EEA" transparent opacity={0.6} />
    </instancedMesh>
  )
}
```

### Responsive 3D
```tsx
function ResponsiveScene() {
  const { viewport } = useThree()
  const isMobile = viewport.width < 5 // roughly maps to screen width

  return (
    <>
      {isMobile ? <SimplifiedScene /> : <FullScene />}
    </>
  )
}
```

## Mobile Optimization
- Detect mobile via viewport width in R3F — switch to simplified scenes
- Reduce particle count by 70% on mobile
- Disable post-processing effects on mobile
- Use lower-resolution textures (512x512 max)
- Set `dpr={[1, 1.5]}` on mobile (not [1, 2])
- Consider replacing 3D with high-quality static images on very low-end devices
- Test on real devices: iPhone SE (low-end), iPhone 14 (mid), Galaxy S24 (high-end)

## Debugging
- Use `r3f-perf` in development: `<Perf position="top-left" />`
- Monitor: draw calls, triangles, fps, memory
- Use Spector.js Chrome extension for WebGL debugging
- Performance profiling: Chrome DevTools Performance tab with "GPU" enabled
