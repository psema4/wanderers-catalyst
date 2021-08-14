const BIT_NOISE1 = 0xB5297A4D
const BIT_NOISE2 = 0x68E31DA4
const BIT_NOISE3 = 0x1B56C4E9
const PRIME1 = 198491317
const PRIME2 = 6542989

class Squirrel3 {
	constructor() {
	}
	
	// get1d(), get2d() and get3d() each return an integer
	get1d(x=0, seed=0) {
		 let mangled = x
		 
		 mangled *= BIT_NOISE1
		 mangled += seed
		 mangled ^= (mangled >> 8)
		 mangled += BIT_NOISE2
		 mangled ^= (mangled << 8)
		 mangled *= BIT_NOISE3
		 mangled ^= (mangled >> 8)
		 
		 return mangled
	}
	
	get2d(x=0, y=0, seed=0) {
		return this.get1d(x + (PRIME1 * y), seed)
	}

	get3d(x=0, y=0, z=0, seed=0) {
		return this.get1d(x + (PRIME1 * y) + (PRIME2 * z), seed)
	}

	// get1df(), get2df() and get3df() each return a float between 0 and 1
	// (assumes we're working with int32's)
	get1df(x=0, seed=0) {
		return this.get1d(x, seed) / 0xFFFFFFFF
	}

	get2df(x=0, y=0, seed=0) {
		return this.get2d(x, y, seed) / 0xFFFFFFFF
	}

	get3df(x=0, y=0, z=0, seed=0) {
		return this.get3d(x, y, z, seed) / 0xFFFFFFFF
	}
}