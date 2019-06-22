<script>
    import { onMount } from "svelte";
    import { Scene, PerspectiveCamera, FaceColors, WebGLRenderer, CylinderGeometry, MeshBasicMaterial, Mesh } from "three";

    const createCylinder = (...targets) => {
        const geometry = new CylinderGeometry(1, 1, 1, 8);

        // TOP = BOTTOM = 8 faces
        // FACE = 2

        geometry.faces.forEach(face => face.color.set(0xdddddd));

        for (const target of targets) {
            ([target * 2, target * 2 + 1, 16 + target, 16 + target + 8])
                .map(idx => geometry.faces[idx])
                .forEach(face => face.color.set(0x333333));
        }

        const material = new MeshBasicMaterial({ vertexColors: FaceColors });

        return new Mesh(geometry, material);
    };

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const a = createCylinder(3, 4);
    const b = createCylinder(4, 5);
    const c = createCylinder(2,3,4,5,6);

    b.position.y = 1;
    c.position.y = 2;

    const cylinders = [a, b, c];

    cylinders.forEach(cylinder => scene.add(cylinder));
    camera.position.z = 5;

    let canvas;

    onMount(() => {
        const renderer = new WebGLRenderer({ canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const animate = () => {
            requestAnimationFrame(animate);

            cylinders.forEach(cylinder => (cylinder.rotation.y += 0.1));

            renderer.render(scene, camera);
        }

        animate();

        return () => {};
    });
</script>

<canvas bind:this={canvas}></canvas>

<style>
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
