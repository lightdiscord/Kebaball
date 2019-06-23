import { CylinderGeometry, MeshBasicMaterial, FaceColors, Mesh } from "three";
import { map, forEach } from "@kebaball-packages/utils";

export const createCylinder = (targets = []) => {
    const segments = 8;
    const geometry = new CylinderGeometry(1, 1, 1, segments);

    geometry.faces.forEach(face => face.color.set(0xdddddd));

    targets
        .map(target => [ target * 2, target * 2 + 1, segments * 2 + target, segments * 3 + target ])
        .map(map(idx => geometry.faces[idx]))
        .forEach(forEach(face => face.color.set(0x333333)));

    const material = new MeshBasicMaterial({ vertexColors: FaceColors });

    return new Mesh(geometry, material);
}
