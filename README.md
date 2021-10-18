# fight-boredom

- 📟 Find something to do from your command line. A CLI for the Bored API.

<br>

## Install

```sh
# Recommended.
npx fight-boredom

# OR an alternative global install.
npm install -g fight-boredom
```

<br>

## Usage

1. Run the CLI using:

```sh
npx fight-boredom

# OR for global install
fight-boredom
# OR alias for global install
ncli
```

#### BASIC USAGE

```sh
fight-boredom <command> [option]
```

#### COMMANDS

```sh
help  Print help info
```

#### OPTIONS

```sh
    --type           Find a random activity with a given type
                     Possible values: [ "education", "recreational", "social", "charity",
                                        "diy", "cooking", "relaxation", "music", "busywork" ]
    --participants   Find something with a given number of participants
                     Possible values: [0, n]             
    --price          Find an activity with a specified price
                     Possible values: [0.0, 1.0]
    --accessibility  Find something with a specified accessibility factor
                     Possible values: [0.0, 1.0]
-c, --clear          Clear the console
-d, --debug          Print debug info
-v, --version        Print CLI version   
```

<br>

## License & Thanks

- MIT © [Nathan Englert](https://twitter.com/nathanenglert/)
- Thanks to Ahmad Awais for create-node-cli

<br>

## Connect

<div align="left">
    <p><a href="https://github.com/nathanenglert"><img alt="GitHub @nathanenglert" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> to stay up to date on what I'm building</small></p>
    <p><a href="https://www.linkedin.com/in/nathanenglert/"><img alt="LinkedIn @nathanenglert" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> to see my professional side</small></p>
    <p><a href="https://twitter.com/nathanenglert/"><img alt="Twitter @nathanenglert" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> to see my less professional side</small></p>
    <p><a href="https://nathanenglert.com/"><img alt="Blog: nathanenglert.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> posts I write from time-to-time</small></p>    
</div>
