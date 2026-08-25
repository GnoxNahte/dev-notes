---
publish: true
created: 2026-06-16T04:36:52.889Z
modified: 2026-06-18T07:12:22.216Z
published: 2026-06-18T07:12:22.216Z
tags:
aliases:
---

### Basic component

From Unity's E-book (Slightly modified):

```csharp
// This entity component type represents an energy shield, storing only its data
// NOTE: This is a struct! So it's a value type, not reference
public struct EnergyShield : IComponentData
{
    public int HitPoints;
    public int MaxHitPoints;
    public float RechargeRate;
}

// A simple example authoring component that's just an ordinary MonoBehaviour
// that has a defined Baker class.
public class EnergyShieldAuthoring : MonoBehaviour 
{
    public int MaxHitPoints;
    public float RechargeRate;
	
	// Baker for the EnergyShieldAuthroing component
	// Run once for every EnergyShieldAuthoring instance
	// that's attached to any Object in a subscene
	// It converts the MonoBehaviour -> An Entity + IComponentData
    class Baker : Baker<EnergyShieldAuthoring> 
    {
        public override void Bake(EnergyShieldAuthoring authoring) 
        {
	        // TransformUsageFlags specify which 
	        // transform component the entity should have. 
	        // TransformUsageFlags.None = no need any transform.
            var entity = GetEntity(TransformUsageFlags.None);
            AddComponent(entity, new EnergyShield
            {
                HitPoints = authoring.MaxHitPoints,
                MaxHitPoints = authoring.MaxHitPoints,
                RechargeRate = authoring.RechargeRate,
            });
        }
    }
}
```

Notes:

- Baker class doesn't have to be inside the authoring class. Just makes it easier for organising

> [!EXAMPLE]- Another example - Use Rotation in degrees in the editor but use radians internally
>
> ```csharp
> // This RotationSpeedAuthoring class must follow the MonoBehaviour convention
> // and should live in a file named RotationSpeedAuthoring.cs
> public class RotationSpeedAuthoring : MonoBehaviour
> {
>     public float DegreesPerSecond;
> }
>
> public struct RotationSpeed : IComponentData
> {
>     public float RadiansPerSecond;
> }
>
> public class SimpleBaker : Baker<RotationSpeedAuthoring>
> {
>     public override void Bake(RotationSpeedAuthoring authoring)
>     {
>         var entity = GetEntity(TransformUsageFlags.Dynamic);
>         AddComponent(entity, new RotationSpeed
>         {
>             RadiansPerSecond = math.radians(authoring.DegreesPerSecond)
>         });
>     }
> }
> ```
>
> Link: [Unity Entities package - Baker Overview](https://docs.unity3d.com/Packages/com.unity.entities@6.5/manual/baking-baker-overview.html) (Slightly modified)
