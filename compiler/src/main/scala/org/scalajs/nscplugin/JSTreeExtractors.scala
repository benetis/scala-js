/* Scala.js compiler
 * Copyright 2013 LAMP/EPFL
 * @author  Tobias Schlatter
 */

package org.scalajs.nscplugin

import scala.annotation.tailrec

import org.scalajs.ir.Trees._
import org.scalajs.ir.Types._

/** Useful extractors for JavaScript trees */
object JSTreeExtractors {

  object jse {

    object BlockOrAlone {
      def unapply(tree: Tree): Some[(List[Tree], Tree)] = Some(tree match {
        case Block(trees) => (trees.init, trees.last)
        case _            => (Nil, tree)
      })
    }

  }

}
