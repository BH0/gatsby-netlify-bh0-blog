---
path: /blog/egg-bash-a-simple-unity-game-tutorial
date: '2019-04-20'
title: Egg Bash - A Simple Unity Game Tutorial
---
Egg Bash - A Simple Unity Game Tutorial 

In this tutorial we see going to make a game that I have decided to nickname “Egg Bash” as the game will involve two players to bash the other eggs using their egg. 

I was hoping that we could determine what egg will crack by comparing one egg speed to the other egg speed, but in the meantime we will just use a simpler (Mario inspired) solution. 

The tutorial assumes basic programming knowledge as well as working with assets and scenes in Unity at a basic level. 

The key features I want to explain is networking and mobile based accelerometer input (meaning an Android or IOS device may be required - I use Android). 

Let us first get an set up the scene and each game object’s components. We are going to focus on the game as if it was to have no multiplayer for now. Please note that I am making a 2D game but I believe the process is somewhat similar for 3D.

# Egg 
Ensure your egg object has a RigidBody (RigidBody2D) with the default settings, as well as a box collider (2D) with the default settings. Ensure this object has the tag of “egg” (as we will see why later on within the code). Make sure you make this a prefab. 

# Floor 
We do not want our floor to fall, but to be collidable, so give it a default box collider too. Ensure this object has the tag of “floor”. 

# Egg’s Code 
Here is the entire script. I will only give an explanation of the important parts specific to this game, I encourage you to use the Unity documentation as you study the code yourself (remember this is CSharp). . 

```cs
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class egg : MonoBehaviour
{
    public Rigidbody2D rb;
    bool canJump = true;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (SystemInfo.deviceType == DeviceType.Handheld)
        {
            mobileInput();
        }
        else
        {
            desktopInput();
        }
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.CompareTag("floor"))
        {
            canJump = true;
        }

        if (other.gameObject.CompareTag("egg"))
        {
            if (other.transform.position.y < transform.position.y)
            {
                Destroy(other.gameObject);
            }
        }
    }

    void desktopInput()
    {

        if (Input.GetKey("left"))
        {
            rb.AddForce(-transform.right * 9);
        }

        if (Input.GetKey("right"))
        {
            rb.AddForce(transform.right * 9);
        }

        if (Input.GetKey("up") && canJump)
        {
            jump();
        }
    }


    void mobileInput()
    {
        transform.Translate(Input.acceleration.x, 0, 0);
        if (Input.touchCount >= 1)
        {
            jump();
        }
    }

    void jump()
    {
        if (canJump)
        {
            rb.AddForce(transform.up * 650);
            canJump = false;
        }
    }

````

In the update method we determine if the player is using a computer or a smartphone, if they are using a computer, we call the method designed to handle keyboard input (as computers have are unlikely accelerometers), if it is a smartphone, then we assume that the user can use an accelerometer - remember an accelerometer is a device that keeps track of what angle the device is at, so we call the method designed for this type of input. 

Next we handle the collision, as I said, this may be improved upon, but currently, we check if one player is on top of another - similar to Mario and Goombas, if so, the player on top will have successfully “bashed” the other egg (which will in turn be destroyed). Notice the use of the “compareTag”, to determine if the player is indeed colliding with an egg.  If the player is touching the floor then we permit them to jump - this helps prevent infinite jumping. 

Inside the mobile input method, we are repositioning (translating) the position of the egg based on the angle (orientation) of the smartphone, it took me some time to understand the difference between beta, gamma and alpha - each representing an axis such as X, Y or Z. For the player to jump, we check if the have “tapped” the device’s touchscreen. 

I believe the rest of the code can be understood with some fiddling and documentation, feel free to make improvements. The game should now be playable (but admittedly boring). 

# Client / Server 
Now that we have the core mechanic of our game working, let us implement networking. We need to have a basic understanding of a networking model known as the client/server model. In this model, there will be one main server, that each individual client will communicate with - think of the server as the post office, and each client is an individual house - with an internet protocol address similar to the type of address I am sure you are familiar with. This blog post was inspired by “The Basics of Unity 5 Networking” by the Youtuber Holistic3d, so if you are not understanding, perhaps checkout their video, otherwise read on. 

# Implementing Multiplayer 
With the egg object selected, give the car the NetworkIdentity component (under “Network”), so each instance of the egg can be controlled by its own player, ensure “Local Player Auth[“ority”]” is checked. To have each instance of the egg’s position visible to all clients, give the egg object the “NetworkTransform” component, notice that we are syncing the RigidBody. Do not forget to apply the prefab. You can now delete the egg object but not the prefab. 

Create an empty game object and name it something such as “Network Manager”. Give this object the components of “NetworkManager” and “NetworkManagerHUD” - this component gives us a really basic graphical user interface for networking.  Inside the “NetworkManager” component, expand the “Spawn Info” section and assign “Player Prefab” the egg prefab. 

If you run the game now, each client’s egg object will be controlled by one… Its weird and difficult to explain, but essentially we only want the code to run on the user’s client that is associated with that one specific instance. 

We want the “egg” script to be disabled by default, this is accomplished by removing the tick from the checkbox within the egg script component. We are then going to use the following script to re-enable this egg script. Attach this script called “SetupLocalPlayer.cs” to the egg prefab. 

```cs
using UnityEngine; 
using System.Collections; 
using UnityEngine.Networking;

public class SetupLocalPlayer : NetworkBehaviour
{
    void Start()
    {
        if (isLocalPlayer)
        {
            GetComponent<egg>().enabled = true;
        }
    }
}
```

# Running Our Game 
We are going to have to build our game, I built mine for both mobile and desktop. For mobile, you may need to adjust a setting that will adjust the size of the NetworkManagerHUD user interface so that it is readable but still fits on the screen. Next, enter the IP address of the device that you want to connect  - such as a friend’s smartphone’s IP address (which can be achieved from the settings app), not the IP address of the router, however, both devices have to exist on the same network - that is, should be connected to the same router that the device hosting your game (the server) is connected to. Note that you can build two versions of your game on the desktop PC and have them connect easily, as the computer will have its own internal network - known as the localhost. If you are doing this, running the game in windowed mode will help. 

# Limitations 
As I mentioned, I would like to improve the physics and collisions of our game, I encourage you to implement this yourself - otherwise I will extend the blog post to demonstrate how at a later date, One webpage that might be of interest is https://answers.unity.com/questions/483422/comparing-rigidbody-speeds.html  - which may help with improving the physics related collisions. The game as far as I can tell will only allow multiplayer within a local area network, and lastly, is the default user interface for the Network HUD not ugly? Perhaps you could even give the egg a rolling animation. The Youtuber (Holistic3d) also demonstrates how to have a “name” above the player’s object so they know what is theirs and what objects are not theirs - I encourage you to do this as well as it will help improve the user friendliness of your game. Thanks for reading. 
